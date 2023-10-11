import { authClient } from "../../lib/lens/client";
import { RefreshDocument, RefreshRequest } from "../generated";

const refresh = async (request: RefreshRequest): Promise<any> => {
  return authClient.mutate({
    mutation: RefreshDocument,
    variables: {
      request: request,
    },
  });
};

export default refresh;
