import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import {
  OnchainPostRequest,
  PostOnchainDocument,
  PostOnchainMutation,
} from "../generated";

const onChainPost = async (
  request: OnchainPostRequest
): Promise<FetchResult<PostOnchainMutation>> => {
  return authClient.mutate({
    mutation: PostOnchainDocument,
    variables: {
      request: request,
    },
  });
};

export default onChainPost;
