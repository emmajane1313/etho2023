import useCheckout from "@/components/Checkout/hooks/useCheckout";
import CartItems from "@/components/Checkout/modules/CartItems";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Fulfillment from "@/components/Checkout/modules/Fulfillment";

export default function Checkout() {
  const {
    handleCheckout,
    grantCheckoutLoading,
    itemCheckedOut,
    fulfillment,
    setFulfillment,
  } = useCheckout();
  const cartItems = useSelector(
    (state: RootState) => state.app.cartItemsReducer.items
  );
  return (
    <div className="relative w-full h-full flex flex-row items-start justify-center p-5 gap-10">
      <Fulfillment fulfillment={fulfillment} setFulfillment={setFulfillment} />
      <CartItems
        cartItems={cartItems}
        grantCheckoutLoading={grantCheckoutLoading}
        itemCheckedOut={itemCheckedOut}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}
