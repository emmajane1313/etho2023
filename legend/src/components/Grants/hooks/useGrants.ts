import { useState } from "react";

const useGrants = () => {
  const [imageIndex, setImageIndex] = useState<number[]>([0]);
  const [reactBox, setReactBox] = useState<{
    comment: string;
    like: string;
    mirror: string;
  }>({
    comment: "",
    like: "",
    mirror: "",
  });
  const [collectChoice, setCollectChoice] = useState<
    {
      size: string;
      color: string;
    }[]
  >(Array.from({ length: 7 }, () => ({ size: "", color: "" })));

  const likeGrant = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const mirrorGrant = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const commentGrant = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const disputeGrant = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const showComments = async (id: string) => {
    if (id === reactBox.comment) {
      setReactBox({
        ...reactBox,
        comment: "",
      });
      return;
    } else {
      setReactBox({
        ...reactBox,
        comment: id,
      });
    }
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const showLikes = async (id: string) => {
    if (id === reactBox.like) {
      setReactBox({
        ...reactBox,
        like: "",
      });
      return;
    } else {
      setReactBox({
        ...reactBox,
        like: id,
      });
    }
    if (reactBox.like) {
      return;
    }
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const showMirrors = async (id: string) => {
    if (id === reactBox.mirror) {
      setReactBox({
        ...reactBox,
        mirror: "",
      });
      return;
    } else {
      setReactBox({
        ...reactBox,
        mirror: id,
      });
    }
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return {
    imageIndex,
    setImageIndex,
    disputeGrant,
    commentGrant,
    likeGrant,
    mirrorGrant,
    collectChoice,
    setCollectChoice,
    showComments,
    showLikes,
    showMirrors,
    reactBox,
  };
};

export default useGrants;
