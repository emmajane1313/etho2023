import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import { AuthenticateDocument, SignedAuthChallenge } from "../generated";

const authenticate = async (
  request: SignedAuthChallenge
): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> => {
  return authClient.mutate({
    mutation: AuthenticateDocument,
    variables: {
      request: request,
    },
  });
};

export default authenticate;
