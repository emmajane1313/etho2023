import { authClient } from "../../lib/lens/client";
import { PublicationsDocument, PublicationsRequest } from "../generated";

export const getPublications = (request: PublicationsRequest) => {
  return authClient.query({
    query: PublicationsDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
export default getPublications;
