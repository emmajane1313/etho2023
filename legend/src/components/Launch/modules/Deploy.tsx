import { FunctionComponent } from "react";
import { DeployProps } from "../types/launch.types";
import { AiOutlineLoading } from "react-icons/ai";

const Deploy: FunctionComponent<DeployProps> = ({
  handlePostGrant,
  handleRegisterGrant,
  registerLoading,
  grantPosted,
  grantRegistered,
  postLoading,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-row items-center justify-end gap-2 p-2 text-xxs">
      <div
        className={`relative w-40 h-8 bg-viol border border-white rounded-md items-center justify-center flex px-1.5 ${
          grantRegistered ? "opacity-70" : "cursor-pointer active:scale-95"
        }`}
      >
        <div
          className={`relative w-fit h-fit text-center font-dog text-white ${
            registerLoading && "animate-spin"
          }`}
          onClick={() =>
            !grantRegistered && !registerLoading && handleRegisterGrant()
          }
        >
          {registerLoading ? (
            <AiOutlineLoading size={15} color={"white"} />
          ) : (
            "Register Grant"
          )}
        </div>
      </div>
      <div className="relative w-fit h-8 text-white font-dog items-center px-1.5 justify-center flex bg-mar border border-white rounded-md">
        {`>>>`}
      </div>
      <div
        className={`relative w-40 h-8 bg-viol border border-white rounded-md items-center justify-center px-1.5 flex ${
          !grantRegistered || grantPosted
            ? "opacity-70"
            : "cursor-pointer active:scale-95"
        }`}
      >
        <div
          className={`relative w-fit h-fit text-center font-dog text-white ${
            postLoading && "animate-spin"
          }`}
          onClick={() =>
            !grantPosted && !postLoading && grantRegistered && handlePostGrant()
          }
        >
          {postLoading ? (
            <AiOutlineLoading size={15} color={"white"} />
          ) : (
            "Post Grant"
          )}
        </div>
      </div>
    </div>
  );
};

export default Deploy;
