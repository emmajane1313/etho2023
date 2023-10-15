import { useEffect, useState } from "react";
import actOnGrant from "../../../../graphql/mutations/actOn";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { CartItem, Fulfillment } from "../types/checkout.types";
import { COLLECT_LEVEL_ABI, CURRENCY_ADDRESS } from "../../../../lib/constants";

const useCheckout = () => {
  const cartItems = useSelector(
    (state: RootState) => state.app.cartItemsReducer.items
  );
  const { address } = useAccount();
  const [grantCheckoutLoading, setGrantCheckoutLoading] = useState<boolean[]>(
    []
  );
  const [fulfillment, setFulfillment] = useState<Fulfillment>();
  const [encryptedfulfillment, setEncryptedFulfillment] = useState<string>();
  const [itemCheckedOut, setItemCheckedOut] = useState<boolean[]>([]);

  const handleEncryptFulfillment = async () => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleCheckout = async (item: CartItem) => {
    const index = cartItems.findIndex((pub) => pub.id === item.id);
    if (index === -1) {
      return;
    }
    setGrantCheckoutLoading((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = true;
      return updatedArray;
    });

    try {
      const encodedData = ethers.utils.defaultAbiCoder.encode(
        COLLECT_LEVEL_ABI,
        [CURRENCY_ADDRESS, item.level, encryptedfulfillment]
      );

      await actOnGrant({
        actOn: {
          unknownOpenAction: {
            address: address,
            data: encodedData,
          },
        },
        for: item.id,
      });
      setItemCheckedOut((prev) => {
        const updatedArray = [...prev];
        updatedArray[index] = true;
        return updatedArray;
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setGrantCheckoutLoading((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = false;
      return updatedArray;
    });
  };

  useEffect(() => {
    if (cartItems?.length > 0) {
      setGrantCheckoutLoading(
        Array.from({ length: cartItems.length }, () => false)
      );
      setItemCheckedOut(Array.from({ length: cartItems.length }, () => false));
    }
  }, [cartItems]);

  return {
    handleCheckout,
    grantCheckoutLoading,
    itemCheckedOut,
    fulfillment,
    setFulfillment,
  };
};

export default useCheckout;
