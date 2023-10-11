import { FetchResult } from "@apollo/client";
import { authClient } from "../../lib/lens/client";
import {
  CreateProfileWithHandleDocument,
  CreateProfileWithHandleRequest,
} from "../generated";

const createProfile = async (
  request: CreateProfileWithHandleRequest
): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> => {
  return authClient.mutate({
    mutation: CreateProfileWithHandleDocument,
    variables: {
      request: request,
    },
  });
};

export default createProfile;
