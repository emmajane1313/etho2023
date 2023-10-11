import useGrants from "@/components/Grants/hooks/useGrants";
import Grant from "@/components/Grants/modules/Grant";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import LikeBox from "@/components/Grants/modules/LikeBox";
import MirrorBox from "@/components/Grants/modules/MirrorBox";
import CommentBox from "@/components/Grants/modules/CommentBox";

export default function Home() {
  const {
    imageIndex,
    setImageIndex,
    setCollectChoice,
    commentGrant,
    mirrorGrant,
    likeGrant,
    disputeGrant,
    collectChoice,
    showComments,
    showLikes,
    showMirrors,
    reactBox,
  } = useGrants();
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(
    (state: RootState) => state.app.cartItemsReducer.items
  );
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-start p-2 overflow-auto flex-grow"
      id="milestone"
    >
      {reactBox?.comment !== "" && <CommentBox />}
      {reactBox?.mirror !== "" && <MirrorBox />}
      {reactBox?.like !== "" && <LikeBox />}
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
          publication={""}
          disputeGrant={disputeGrant}
          collectChoice={collectChoice}
          commentGrant={commentGrant}
          likeGrant={likeGrant}
          mirrorGrant={mirrorGrant}
          setCollectChoice={setCollectChoice}
          cartItems={cartItems}
          dispatch={dispatch}
          router={router}
          showComments={showComments}
          showLikes={showLikes}
          showMirrors={showMirrors}
        />
      </InfiniteScroll>
    </div>
  );
}
