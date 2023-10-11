import { useEffect, useState } from "react";
import generateChallenge from "../../../../graphql/queries/challenge";
import { useAccount, useSignMessage } from "wagmi";
import { useDispatch } from "react-redux";
import { setWalletConnected } from "../../../../redux/reducers/walletConnectedSlice";
import authenticate from "../../../../graphql/mutations/authenticate";
import {
  getAuthenticationToken,
  isAuthExpired,
  refreshAuth,
  removeAuthenticationToken,
  setAuthenticationToken,
} from "../../../../lib/lens/utils";
import { setLensConnected } from "../../../../redux/reducers/lensProfileSlice";
import getProfiles from "../../../../graphql/queries/profiles";
import { Profile } from "../../../../graphql/generated";
import createProfile from "../../../../graphql/mutations/createProfile";

const useSignIn = () => {
  const dispatch = useDispatch();
  const { signMessageAsync } = useSignMessage();
  const [signInLoading, setSignInLoading] = useState<boolean>(false);
  const [createProfileLoading, setCreateProfileLoading] =
    useState<boolean>(false);
  const { address, isConnected } = useAccount();

  const createProfileWithHandle = async () => {
    setCreateProfileLoading(true);
    try {
      const profile = await createProfile({
        handle: new Date().toDateString(),
        to: address,
      });

      console.log(profile?.data?.createProfileWithHandle);
    } catch (err: any) {
      console.error(err.message);
    }
    setCreateProfileLoading(false);
  };

  const handleLensSignIn = async () => {
    setSignInLoading(true);
    try {
      const profile = await getProfiles({
        where: {
          ownedBy: [address],
        },
      });
      const challengeResponse = await generateChallenge({
        for: profile?.data?.profiles?.items?.[
          profile?.data?.profiles?.items?.length - 1
        ].id,
        signedBy: address,
      });
      const signature = await signMessageAsync({
        message: challengeResponse.data.challenge.text,
      });
      const accessTokens = await authenticate({
        id: challengeResponse.data.challenge.id,
        signature: signature,
      });
      if (accessTokens) {
        setAuthenticationToken({ token: accessTokens.data.authenticate });
        dispatch(
          setLensConnected(
            profile?.data?.profiles?.items?.[
              profile?.data?.profiles?.items?.length - 1
            ] as Profile
          )
        );
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setSignInLoading(false);
  };

  useEffect(() => {
    dispatch(setWalletConnected(isConnected));
  }, [isConnected, address]);

  const handleRefreshProfile = async (): Promise<void> => {
    try {
      const profile = await getProfiles({
        where: {
          ownedBy: [address],
        },
      });
      if (profile?.data?.profiles?.items?.length !== null) {
        dispatch(
          setLensConnected(
            profile?.data?.profiles?.items?.[
              profile?.data?.profiles?.items?.length - 1
            ] as Profile
          )
        );
      } else {
        removeAuthenticationToken();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const handleAuthentication = async () => {
      const token = getAuthenticationToken();
      if (isConnected && !token) {
        dispatch(setLensConnected(undefined));
        removeAuthenticationToken();
      } else if (isConnected && token) {
        if (isAuthExpired(token?.exp)) {
          const refreshedAccessToken = await refreshAuth();
          if (!refreshedAccessToken) {
            removeAuthenticationToken();
          }
        }
        await handleRefreshProfile();
      }
    };

    handleAuthentication();
  }, [isConnected]);

  return {
    handleLensSignIn,
    signInLoading,
    createProfileWithHandle,
    createProfileLoading,
  };
};

export default useSignIn;
