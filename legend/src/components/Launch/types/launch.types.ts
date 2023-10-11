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
  postInformation: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  };
  setPostInformation: (e: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  }) => void;
};

export type DeployProps = {
  handleRegisterGrant: () => Promise<void>;
  grantRegistered: boolean;
  handlePostGrant: () => Promise<void>;
  registerLoading: boolean;
  postLoading: boolean;
  grantPosted: boolean;
};

export type InformationProps = {
  postInformation: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  };
  setPostInformation: (e: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  }) => void;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  imageLoading: boolean;
};

export type GranteesProps = {
  postInformation: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  };
  setPostInformation: (e: {
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    experience: string;
    team: string;
    grantees: string[];
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  }) => void;
};

