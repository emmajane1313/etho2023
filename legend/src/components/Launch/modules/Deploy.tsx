import { FunctionComponent } from "react";
import { DeployProps } from "../types/launch.types";
import { AiOutlineLoading } from "react-icons/ai";

const Deploy: FunctionComponent<DeployProps> = ({
  grantStage,
  setGrantStage,
  grantStageLoading,
}): JSX.Element => {
  return (
    <div className="absolute w-fit h-fit flex flex-row items-center justify-end gap-2 p-2 text-xxs bottom-2 right-3">
      <div
        className={`relative w-fit h-8 text-white font-dog items-center px-1.5 justify-center flex bg-mar border border-white rounded-md ${
          grantStage === 0 ? "opacity-60" : "cursor-pointer active:scale-95"
        }`}
        onClick={() =>
          grantStage !== 0 &&
          !grantStageLoading &&
          setGrantStage(grantStage - 1)
        }
      >
        {`<<<`}
      </div>
      <div
        className={`relative w-40 h-8 bg-viol border border-white rounded-md items-center justify-center px-1.5 flex ${
          grantStage === 5 || grantStageLoading
            ? "opacity-60"
            : "cursor-pointer active:scale-95"
        }`}
        onClick={() =>
          grantStage !== 5 &&
          !grantStageLoading &&
          setGrantStage(grantStage + 1)
        }
      >
        <div
          className={`relative w-fit h-fit text-center font-dog text-white ${
            grantStageLoading && "animate-spin"
          }`}
        >
          {grantStageLoading ? (
            <AiOutlineLoading size={15} color="white" />
          ) : (
            "Continue"
          )}
        </div>
      </div>
    </div>
  );
};

export default Deploy;
