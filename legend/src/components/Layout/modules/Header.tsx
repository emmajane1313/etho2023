import { useConnectModal } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import useSignIn from "../hooks/useSignIn";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";

const Header: FunctionComponent = (): JSX.Element => {
  const { openConnectModal } = useConnectModal();
  const { signInLoading, handleLensSignIn } = useSignIn();
  const connected = useSelector(
    (state: RootState) => state.app.walletConnectedReducer.value
  );
  const profile = useSelector(
    (state: RootState) => state.app.lensProfileReducer.profile
  );
  return (
    <div className="relative bg-black h-12 p-2 justify-center items-center flex flex-row w-full h-fit">
      <Link
        href={"/"}
        className="absolute ml-auto left-2 items-center justify-center flex font-vcr text-white uppercase text-xl cursor-pointer"
      >
        LEGEND
      </Link>
      <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
        {[
          ["storefront", "store", "#F8F87F"],
          ["view grants", "", "#7BF678"],
          ["launch grant", "/launch", "#D07BF7"],
          ["web3 public goods", "web3", "#59ABF7"],
        ].map((item: string[], index: number) => {
          return (
            <Link
              key={index}
              href={`/${item[1]}`}
              className="relative w-fit h-fit px-2 py-1.5 items-center justify-center rounded-sm border font-vcr text-white text-xs active:scale-95 hover:opacity-70"
              style={{
                borderColor: item[2],
              }}
            >
              {item[0]}
            </Link>
          );
        })}
      </div>
      <div className="absolute flex items-center justify-center flex-row gap-2 mr-auto right-2">
        <div className="relative flex flex-row gap-1.5 items-center justify-center w-fit h-fit">
          {Array.from(
            { length: 3 },
            () => "QmTFgipESste4Gw5Eq5LZ6naxRMbqu3yonwEHVkyYNMTTt"
          ).map((item: string, index: number) => {
            return (
              <div
                key={index}
                className="relative flex justify-center items-center w-5 h-4"
              >
                <Image
                  layout="fill"
                  src={`${INFURA_GATEWAY}/ipfs/${item}`}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
        <div
          className="relative w-24 h-7 items-center justify-center flex text-white font-vcr cursor-pointer active:scale-95 border border-white rounded-sm text-sm"
          onClick={
            !connected
              ? openConnectModal
              : () => !signInLoading && handleLensSignIn()
          }
        >
          <div
            className={`relative text-center items-center justify-center flex `}
          >
            {signInLoading ? (
              <AiOutlineLoading />
            ) : !connected ? (
              "Connect"
            ) : (
              connected && profile && "Lens"
            )}
          </div>
        </div>
        <div className="relative w-5 h-4 flex items-center justify-center cursor-pointer active:scale-95">
          <Image
            src={`${INFURA_GATEWAY}/ipfs/QmcDmX2FmwjrhVDLpNii6NdZ4KisoPLMjpRUheB6icqZcV`}
            layout="fill"
            objectFit="cover"
            draggable={false}
            className="flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
