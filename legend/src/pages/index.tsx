import useGrants from "@/components/Grants/hooks/useGrants";
import Grant from "@/components/Grants/modules/Grant";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const { imageIndex, setImageIndex } = useGrants();
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start p-2 overflow-auto flex-grow">
      <InfiniteScroll
        dataLength={14}
        loader={<></>}
        hasMore={true}
        next={() => {}}
        className={`w-full h-full items-start justify-center`}
      >
        {/* {[].map(
        (publication: ExplorePublication, index: number) => {
          return <Grant key={index} publication={publication} />;
        }
      )} */}
        <Grant
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          index={0}
        />
      </InfiniteScroll>
    </div>
  );
}
