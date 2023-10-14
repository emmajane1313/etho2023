import Bar from "@/components/Common/modules/Bar";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { INFURA_GATEWAY } from "../../../../lib/constants";
import { CollectItemProps } from "../types/launch.types";

const CollectItem: FunctionComponent<CollectItemProps> = ({
  index,
  grantStageLoading,
  item,
}): JSX.Element => {
  return (
    <div className="relative w-72 h-fit flex flex-col">
      <Bar title={`Collect Lvl.${index + 1}`} />
      <div className="relative w-full h-fit flex flex-col bg-offWhite gap-2 justify-start items-center p-2 border-b border-x rounded-b-sm border-black">
        <div className="relative w-52 h-52 rounded-sm border border-black flex items-center justify-center">
          {grantStageLoading ? (
            <div className="relative w-fit h-fit flex items-center justify-center">
              <AiOutlineLoading size={15} color="black" />
            </div>
          ) : (
            <Image
              layout="fill"
              src={`${INFURA_GATEWAY}/ipfs/${item?.image}`}
              draggable={false}
              className="rounded-sm"
            />
          )}
        </div>
        <div className="relative flex items-center text-center justify-center w-fit text-3xl font-net break-words">
          {item?.title}
        </div>
        <div className="relative flex flex-col gap-1.5 justify-start items-center text-black font-dog text-xxs">
          <div className="relative flex justify-start items-center">Sizes</div>
          <div className="relative flex flex-row gap-1 items-center justify-center">
            {["xs", "s", "m", "lg", "xl"].map(
              (item: string, indexTwo: number) => {
                return (
                  <div
                    key={indexTwo}
                    className={`relative w-7 h-7 p-1 flex items-center justify-center text-white text-center text-xxs rounded-sm bg-mar border-black border`}
                  >
                    {item}
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="relative flex flex-col gap-1.5 justify-start items-center text-black font-dog text-xxs">
          <div className="relative flex justify-start items-center">
            Base Colors
          </div>
          <div className="relative flex flex-row gap-1 items-center justify-center">
            {["#000000", "#FFFFFF", "#97D1FD", "#F66054"].map(
              (item: string, indexTwo: number) => {
                return (
                  <div
                    key={indexTwo}
                    className={`relative w-5 h-5 rounded-full border-black border`}
                    style={{
                      backgroundColor: item,
                    }}
                  ></div>
                );
              }
            )}
          </div>
        </div>
        <div className="relative flex justify-center items-center font-dog text-black text-xs">
          $ {item?.amount}
        </div>
      </div>
    </div>
  );
};

export default CollectItem;
