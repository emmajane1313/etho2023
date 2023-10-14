import useLaunch from "@/components/Launch/hooks/useLaunch";
import Deploy from "@/components/Launch/modules/Deploy";
import LaunchSwitch from "@/components/Launch/modules/LaunchSwitch";
import { useRouter } from "next/router";

export default function Launch() {
  const {
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
    grantStage,
    setGrantStage,
    grantStageLoading,
    handleShuffleCollectionLevels,
    grantId
  } = useLaunch();
  const router = useRouter();
  return (
    <div className="relative w-full h-full flex items-center justify-center p-5 overflow-y-hidden">
      <div className="relative w-3/5 h-4/5 items-center justify-center gap-4 flex">
        <LaunchSwitch
          dateOpen={dateOpen}
          setDateOpen={setDateOpen}
          handleDateSelect={handleDateSelect}
          selectedDate={selectedDate}
          inputDateValue={inputDateValue}
          handleInputDateChange={handleInputDateChange}
          handleActivateMilestone={handleActivateMilestone}
          handleClaimMilestone={handleClaimMilestone}
          activateMilestoneLoading={activateMilestoneLoading}
          claimMilestoneLoading={claimMilestoneLoading}
          postInformation={postInformation}
          setPostInformation={setPostInformation}
          grantStage={grantStage}
          imageLoading={imageLoading}
          handleImageUpload={handleImageUpload}
          postLoading={postLoading}
          registerLoading={registerLoading}
          grantPosted={grantPosted}
          grantRegistered={grantRegistered}
          handleRegisterGrant={handleRegisterGrant}
          handlePostGrant={handlePostGrant}
          handleShuffleCollectionLevels={handleShuffleCollectionLevels}
          grantStageLoading={grantStageLoading}
          router={router}
          id={grantId}
        />
      </div>
      <Deploy
        grantStageLoading={grantStageLoading}
        setGrantStage={setGrantStage}
        grantStage={grantStage}
      />
    </div>
  );
}
