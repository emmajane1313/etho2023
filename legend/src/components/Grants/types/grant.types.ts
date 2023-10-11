import { AnyAction } from "redux";
import { ExplorePublication } from "../../../../graphql/generated";
import { Dispatch } from "react";
import { NextRouter } from "next/router";

export type GrantProps = {
  publication: ExplorePublication;
  imageIndex: number[];
  milestoneCovers: string[];
  setImageIndex: (e: number[]) => void;
  index: number;
  disputeGrant: (index: number, id: number) => Promise<void>;
  commentGrant: (id: number) => Promise<void>;
  likeGrant: (id: number) => Promise<void>;
  mirrorGrant: (id: number) => Promise<void>;
  setCollectChoice: (e: { color: string; size: string }[]) => void;
  collectChoice: {
    color: string;
    size: string;
  }[];
  cartItems: {
    id: string;
    size: string;
    color: string;
    amount: number;
    level: number;
  }[];
  dispatch: Dispatch<AnyAction>;
  router: NextRouter;
  showComments: (id: string) => Promise<void>;
  showLikes: (id: string) => Promise<void>;
  showMirrors: (id: string) => Promise<void>;
};

export type CollectItemProps = {
  index: number;
  router: NextRouter;
  setCollectChoice: (e: { color: string; size: string }[]) => void;
  collectChoice: {
    color: string;
    size: string;
  }[];
  cartItems: {
    id: string;
    size: string;
    color: string;
    amount: number;
    level: number;
  }[];
  dispatch: Dispatch<AnyAction>;
  id: string;
  item: {
    title: string;
    description: string;
    amount: number;
  };
};
