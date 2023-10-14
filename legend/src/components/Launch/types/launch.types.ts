import { NextRouter } from "next/router";
import { ChangeEvent } from "react";

export type MilestoneProps = {
  index: number;
  handleInputDateChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleDateSelect: (date: Date | undefined, index: number) => void;
  selectedDate: (Date | undefined)[];
  inputDateValue: string[];
  dateOpen: boolean[];
  setDateOpen: (e: boolean[]) => void;
  handleActivateMilestone: (index: number) => Promise<void>;
  handleClaimMilestone: (index: number) => Promise<void>;
  activateMilestoneLoading: boolean[];
  claimMilestoneLoading: boolean[];
  postInformation: PostInformation;
  setPostInformation: (e: PostInformation) => void;
};

export type RegisterAndPostProps = {
  handleRegisterGrant: () => Promise<void>;
  grantRegistered: boolean;
  handlePostGrant: () => Promise<void>;
  registerLoading: boolean;
  postLoading: boolean;
  grantPosted: boolean;
};

export type PreviewProps = {
  postInformation: PostInformation;
  setPostInformation: (e: PostInformation) => void;
  grantStageLoading: boolean;
};

export type DeployProps = {
  grantStage: number;
  setGrantStage: (e: number) => void;
  grantStageLoading: boolean;
};

export type InformationProps = {
  postInformation: PostInformation;
  setPostInformation: (e: PostInformation) => void;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  imageLoading: boolean;
};

export type GranteesProps = {
  postInformation: PostInformation;
  setPostInformation: (e: PostInformation) => void;
};

export interface LevelInfo {
  collectionIds: number[];
  amounts: number[];
  indexes: number[];
  totalPrice: number;
}

export type LaunchSwitchProps = {
  postInformation: PostInformation;
  handleShuffleCollectionLevels: () => void;
  setPostInformation: (e: PostInformation) => void;
  grantStage: number;
  grantStageLoading: boolean;
  imageLoading: boolean;
  dateOpen: boolean[];
  setDateOpen: (e: boolean[]) => void;
  handleActivateMilestone: (index: number) => Promise<void>;
  handleClaimMilestone: (index: number) => Promise<void>;
  activateMilestoneLoading: boolean[];
  claimMilestoneLoading: boolean[];
  handleInputDateChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleDateSelect: (date: Date | undefined, index: number) => void;
  selectedDate: (Date | undefined)[];
  inputDateValue: string[];
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleRegisterGrant: () => Promise<void>;
  grantRegistered: boolean;
  handlePostGrant: () => Promise<void>;
  registerLoading: boolean;
  postLoading: boolean;
  grantPosted: boolean;
  router: NextRouter;
  id: string | undefined;
};

export interface PostInformation {
  title: string;
  description: string;
  coverImage: string;
  tech: string;
  strategy: string;
  experience: string;
  team: string;
  grantees: string[];
  splits: number[];
  levelArray: LevelInfo[];
  milestones: {
    description: string;
    amount: number;
    submit: string;
    image: string;
  }[];
}

export type CollectionShuffleProps = {
  handleShuffleCollectionLevels: () => void;
  postInformation: PostInformation;
  grantStageLoading: boolean;
};

export type CollectItemProps = {
  index: number;
  grantStageLoading?: boolean;
};

export type SuccessProps = {
  router: NextRouter;
  id: string | undefined;
};
