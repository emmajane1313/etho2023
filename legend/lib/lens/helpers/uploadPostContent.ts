import { PostInformation } from "@/components/Launch/types/launch.types";
import { v4 as uuidv4 } from "uuid";

const uploadPostContent = async (
  postInformation: PostInformation
): Promise<string | undefined> => {
  let newImages: { item: string; type: string; altTag: string }[] = [];
  [
    postInformation.coverImage,
    ...postInformation.milestones.map((item) => item.image),
  ]?.forEach((image) => {
    newImages.push({
      item: "ipfs://" + image,
      type: "image/png",
      altTag: image,
    });
  });

  const formattedText: string = `
  ${postInformation.title}
  \n\n
  ${postInformation.description}
  \n\n
  ${postInformation.strategy}
  \n\n
  ${postInformation.tech}
  \n\n
  ${postInformation.team}
  \n\n
  ${postInformation.experience}
  \n\n
  ${postInformation.milestones
    .map((milestone, index) => {
      return `Milestone ${index + 1}
    ${milestone.description}\n\n${milestone.amount}\n\n${milestone.submit}\n\n`;
    })
    .join("\n\n")}
  `;

  const data = {
    version: "2.0.0",
    metadata_id: uuidv4(),
    description: formattedText,
    content: formattedText,
    external_url: "https://www.legend.xyz/",
    image: newImages[0].item,
    imageMimeType: "image/png",
    name: postInformation.title,
    mainContentFocus: "IMAGE",
    contentWarning: null,
    attributes: [],
    media: newImages,
    locale: "en",
    tags: ["legendgrant"],
    appId: "legend",
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

export default uploadPostContent;
