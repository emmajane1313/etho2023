import useLaunch from "@/components/Launch/hooks/useLaunch";
import Deploy from "@/components/Launch/modules/Deploy";
import Grantees from "@/components/Launch/modules/Grantees";
import Information from "@/components/Launch/modules/Information";
import Milestone from "@/components/Launch/modules/Milestone";

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
  } = useLaunch();
  return (
    <div className="relative w-full h-full flex flex-row items-center justify-center p-5 gap-10">
      <Information
        postInformation={postInformation}
        setPostInformation={setPostInformation}
        imageLoading={imageLoading}
        handleImageUpload={handleImageUpload}
      />
      <div className="relative w-full h-full flex flex-col gap-3">
        <div className="relative flex flex-row w-full h-fit gap-3">
          {Array.from({ length: 3 }).map((_, index: number) => {
            return (
              <Milestone
                key={index}
                index={index}
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
              />
            );
          })}
        </div>
        <Grantees
          postInformation={postInformation}
          setPostInformation={setPostInformation}
        />
        <Deploy
          postLoading={postLoading}
          registerLoading={registerLoading}
          grantPosted={grantPosted}
          grantRegistered={grantRegistered}
          handleRegisterGrant={handleRegisterGrant}
          handlePostGrant={handlePostGrant}
        />
      </div>
    </div>
  );
}
