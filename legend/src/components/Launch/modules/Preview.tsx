import { FunctionComponent } from "react";
import { PreviewProps } from "../types/launch.types";
import Bar from "@/components/Common/modules/Bar";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "../../../../lib/constants";
import CollectItem from "./CollectItem";

const Preview: FunctionComponent<PreviewProps> = ({
  postInformation,
  grantStageLoading,
}): JSX.Element => {
  return (
    <div
      className="relative flex items-start justify-center w-full h-full overflow-y-scroll"
      id="milestone"
    >
      <div className="relative w-full h-fit flex flex-col gap-4 items-center justify-start">
        <div className="relative w-full h-fit flex flex-col items-center justify-start">
          <Bar title="Grant Preview" />
          <div className="relative bg-offWhite w-full h-fit flex flex-col items-center justify-start p-3 gap-6 border border-black rounded-b-sm">
            <div className="relative w-full h-fit flex items-center justify-center text-center">
              <div className="bg-offWhite text-center flex items-center justify-center font-dog text-black text-sm">
                {postInformation?.title} title
              </div>
            </div>
            <div className="relative flex flex-row items-center justify-center gap-5 w-full h-48">
              <div className="relative w-fit h-full flex items-center justify-center">
                <div className="relative w-48 h-full flex items-center justify-center border border-black rounded-sm">
                  <Image
                    layout="fill"
                    src={`${INFURA_GATEWAY}/ipfs/${postInformation?.coverImage}`}
                    className="relative rounded-sm w-full h-full flex"
                  />
                </div>
              </div>
              <div className="relative w-full h-full flex items-start justify-center overflow-y-scroll">
                <div className="bg-offWhite w-full h-full border border-black p-2 rounded-sm font-dog text-black text-xs">
                  {postInformation?.description}
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-row items-start justify-start gap-4">
              <div className="relative flex flex-col justify-start items-start w-full h-full font-dog text-black text-xs gap-2">
                <div className="relative w-fit h-fit flex justify-start items-start">
                  Maintenance Strategy
                </div>
                <div className="relative w-full h-44">
                  <div className="bg-offWhite w-full h-full border border-black p-2 rounded-sm">
                    {postInformation?.strategy}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-start items-start w-full h-full font-dog text-black text-xs gap-2">
                <div className="relative w-fit h-fit flex justify-start items-start">
                  Tech Stack
                </div>
                <div className="relative w-full h-44">
                  <div className="bg-offWhite w-full h-full border border-black p-2 rounded-sm">
                    {postInformation?.tech}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-row items-start justify-start gap-4">
              <div className="relative flex flex-col justify-start items-start w-full h-full font-dog text-black text-xs gap-2">
                <div className="relative w-fit h-fit flex justify-start items-start">
                  Team Experience
                </div>
                <div className="relative w-full h-48">
                  <div className="bg-offWhite w-full h-full border border-black p-2 rounded-sm">
                    {postInformation?.experience}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-start items-start w-full h-full font-dog text-black text-xs gap-2">
                <div className="relative w-fit h-fit flex justify-start items-start">
                  Who's Involved
                </div>
                <div className="relative w-full h-48">
                  <div className="bg-offWhite w-full h-full border border-black p-2 rounded-sm">
                    {postInformation?.team}
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-start items-start w-full h-fit font-dog text-black text-xs gap-2">
                <div className="relative w-fit h-fit flex justify-start items-start">
                  Grantees Wallet Addresses
                </div>
                <div className="relative w-full flex flex-col gap-2 items-center justify-center overflow-y-scroll">
                  {postInformation.grantees?.map(
                    (address: string, index: number) => {
                      return (
                        <div
                          key={index}
                          className="bg-offWhite text-black font-dog flex items-center justify-center text-center border border-black rounded-sm h-7 w-full"
                        >
                          {address}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-fit">
          <div className="relative w-fit h-fit flex flex-row gap-3">
            {Array.from({ length: 3 }).map((item, index: number) => {
              return (
                <div className="relative w-fit h-full bg-offWhite flex flex-col rounded-b-sm">
                  <Bar title={`Milestone ${index + 1}`} />
                  <div className="relative p-2 flex w-fit flex-col items-center justify-center gap-4 border border-black rounded-b-sm h-full">
                    <div
                      className="relative w-full h-72 border border-black rounded-sm items-center justify-center flex overflow-y-scroll"
                      id="milestone"
                    >
                      <div className="bg-quemo break-words p-2 text-amar font-dog text-xxs flex w-full h-full rounded-sm">
                        {postInformation?.milestones[index]?.description}
                      </div>
                    </div>
                    <div className="relative flex flex-row w-fit h-fit items-end justify-between gap-2">
                      <div className="relative flex flex-col items-start justify-center gap-1 w-fit h-fit">
                        <div className="relative font-dog text-black text-xxs items-start justify-center w-fit h-fit">
                          {`Amt Requested ($):`}
                        </div>
                        <div className="w-16 h-8 bg-quemo text-xxs text-amar font-dog p-1 flex items-center justify-center">
                          {postInformation?.milestones[index]?.amount}
                        </div>
                      </div>
                      <div className="relative flex flex-col items-start justify-end gap-1 w-fit h-fit">
                        <div className="relative font-dog text-black text-xxs items-start justify-center w-fit h-fit">
                          Submit By:
                        </div>
                        <div className="relative flex flex-row items-start justify-center gap-1">
                          <div className="relative w-fit h-fit flex items-center justify-center gap-2">
                            <div className="relative flex flex-row gap-2 items-center justify-center w-fit h-fit">
                              <div className="w-24 h-8 bg-quemo text-xxs text-amar font-dog p-1 flex items-center justify-center">
                                {postInformation?.milestones[index]?.submit}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="relative flex w-full h-fit overflow-x-scroll"
          id="milestone"
        >
          <div className="relative w-fit h-fit flex flex-row gap-3">
            {Array.from({ length: 7 }).map((item, index: number) => {
              return (
                <CollectItem
                  index={index}
                  grantStageLoading={grantStageLoading}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
