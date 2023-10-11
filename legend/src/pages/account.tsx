import Grant from "@/components/Account/modules/Grant";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Account() {
  const publishedGrants = useSelector(
    (state: RootState) => state.app.publishedGrantsReducer.items
  );
  return (
    <div className="relative w-full h-full flex flex-row items-start justify-start p-5 gap-10">
      <InfiniteScroll
        dataLength={14}
        loader={<></>}
        hasMore={true}
        next={() => {}}
        className={`w-full h-full grid grid-cols-5 gap-4`}
      >
        {publishedGrants?.map((grant, index: number) => {
          return <Grant key={index} grant={grant} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
