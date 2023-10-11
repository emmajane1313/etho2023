import { useState } from "react";

const useGrants = () => {
  const [imageIndex, setImageIndex] = useState<number[]>([0]);

  const collectGrant = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

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

  return {
    imageIndex,
    setImageIndex,
    disputeGrant,
    collectGrant,
    commentGrant,
    likeGrant,
    mirrorGrant,
  };
};

export default useGrants;
