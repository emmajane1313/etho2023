import { authClient } from "../../lib/lens/client";
import { ProfilesDocument, ProfilesRequest } from "../generated";

export const getProfiles = (request: ProfilesRequest) => {
  return authClient.query({
    query: ProfilesDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
export default getProfiles;
