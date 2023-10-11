import { authClient } from "../../lib/lens/client";
import { ChallengeDocument, ChallengeRequest } from "../generated";

export const generateChallenge = (request: ChallengeRequest) => {
  return authClient.query({
    query: ChallengeDocument,
    variables: {
      request: request,
    },
    fetchPolicy: "no-cache",
  });
};
export default generateChallenge;
