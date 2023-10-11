import { ChangeEvent, useState } from "react";
import { isValid, parse, format } from "date-fns";

const useLaunch = () => {
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  const [grantRegistered, setGrantRegistered] = useState<boolean>(false);
  const [activateMilestoneLoading, setActivateMilestoneLoading] = useState<
    boolean[]
  >(Array.from({ length: 3 }, () => false));
  const [claimMilestoneLoading, setClaimMilestoneLoading] = useState<boolean[]>(
    Array.from({ length: 3 }, () => false)
  );
  const [grantPosted, setGrantPosted] = useState<boolean>(false);
  const [postInformation, setPostInformation] = useState<{
    title: string;
    description: string;
    coverImage: string;
    tech: string;
    strategy: string;
    referral: number;
    grantees: string[];
    experience: string;
    team: string;
    milestones: {
      description: string;
      amount: number;
      submit: string;
    }[];
  }>({
    title: "",
    description: "",
    coverImage: "",
    tech: "",
    strategy: "",
    experience: "",
    team: "",
    referral: 0,
    grantees: [],
    milestones: Array.from({ length: 3 }, () => ({
      description: "",
      amount: 0,
      submit: new Date(
        new Date().setMonth(new Date().getMonth() + 1)
      ).toDateString(),
    })),
  });
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<(Date | undefined)[]>(
    Array.from(
      { length: 3 },
      () => new Date(new Date().setMonth(new Date().getMonth() + 1))
    )
  );
  const [inputDateValue, setInputDateValue] = useState<string[]>(
    Array.from({ length: 3 }, () => "")
  );
  const [dateOpen, setDateOpen] = useState<boolean[]>(
    Array.from({ length: 3 }, () => false)
  );

  const handleInputDateChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const currentInputs = [...inputDateValue];
    currentInputs[index] = (e.target as HTMLInputElement).value;
    setInputDateValue(currentInputs);
    const date = parse(e.currentTarget.value, "y-MM-dd", new Date());
    const currentDates = [...selectedDate];

    if (isValid(date)) {
      currentDates[index] = date;
      setSelectedDate(currentDates);
      const milestones = [...postInformation?.milestones];
      milestones[index].submit = (e.target as HTMLInputElement).value;
      setPostInformation({
        ...postInformation,
        milestones: milestones,
      });
    }
  };

  const handleDateSelect = (date: Date | undefined, index: number) => {
    const currentDates = [...selectedDate];
    const currentInputs = [...inputDateValue];
    if (date) {
      currentDates[index] = date;
      setSelectedDate(currentDates);
      currentInputs[index] = format(date, "yy-MM-dd");
      setInputDateValue(currentInputs);
      const milestones = [...postInformation?.milestones];
      milestones[index].submit = format(date, "yy-MM-dd");
      setPostInformation({
        ...postInformation,
        milestones: milestones,
      });
    }
  };

  const handleRegisterGrant = async () => {
    setRegisterLoading(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setRegisterLoading(false);
  };

  const handlePostGrant = async () => {
    setPostLoading(true);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setPostLoading(false);
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setImageLoading(true);
    try {
      const response = await fetch("/api/ipfs", {
        method: "POST",
        body: (e as any).target.files[0],
      });

      if (response.status !== 200) {
        return;
      } else {
        let cid = await response.json();
        setPostInformation({
          ...postInformation,
          coverImage: String(cid?.cid),
        });
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setImageLoading(false);
  };

  const handleActivateMilestone = async (index: number) => {
    setActivateMilestoneLoading((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setActivateMilestoneLoading((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  const handleClaimMilestone = async (index: number) => {
    setClaimMilestoneLoading((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = true;
      return newArray;
    });
    try {
    } catch (err: any) {
      console.error(err.message);
    }
    setClaimMilestoneLoading((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = false;
      return newArray;
    });
  };

  return {
    handleInputDateChange,
    handleDateSelect,
    selectedDate,
    inputDateValue,
    dateOpen,
    setDateOpen,
    handleRegisterGrant,
    handlePostGrant,
    postLoading,
    registerLoading,
    grantPosted,
    grantRegistered,
    imageLoading,
    handleImageUpload,
    postInformation,
    setPostInformation,
    handleActivateMilestone,
    handleClaimMilestone,
    activateMilestoneLoading,
    claimMilestoneLoading,
  };
};

export default useLaunch;
