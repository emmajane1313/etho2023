import { TextOnlyMetadataV3 } from "../../../graphql/generated";
import { v4 as uuidv4 } from "uuid";

const uploadCommentQuoteContent = async (
  contentText: string
): Promise<string | undefined> => {
  
    const data: TextOnlyMetadataV3 = {
    __typename: "TextOnlyMetadataV3",
    id: uuidv4(),
    hideFromFeed: false,
    locale: "en",
    appId: "legend",
    content: contentText,
    marketplace: {
      description: contentText,
      externalURL: "legend.xyz",
      name: contentText.slice(0, 10),
    },
    rawURI: "",
  };

  try {
    const response = await fetch("/api/ipfs", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      let responseJSON = await response.json();
      return "ipfs://" + responseJSON.cid;
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export default uploadCommentQuoteContent;
