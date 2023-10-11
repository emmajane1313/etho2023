import useStore from "@/components/Store/hooks/useStore";
import Filter from "@/components/Store/modules/Filter";
import Item from "@/components/Store/modules/Item";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Store() {
  const { searchFilters, setSearchFilters } = useStore();
  return (
    <div className="relative w-full h-full flex flex-row items-center justify-center p-5 gap-10">
      <Filter
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
      />
      <InfiniteScroll
        dataLength={14}
        loader={<></>}
        hasMore={true}
        next={() => {}}
        className={`w-full h-full grid grid-cols-3 gap-4`}
      >
        {Array.from({ length: 5 }).map((_, index: number) => {
          return <Item key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
