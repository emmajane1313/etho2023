import { ExplorePublication } from "../../../../graphql/generated";

export type GrantProps = {
  publication: ExplorePublication;
  imageIndex: number[];
  setImageIndex: (e: number[]) => void;
  index: number;
};

export type CollectItemProps = {
  index: number;
};
