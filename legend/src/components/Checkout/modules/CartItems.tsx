import { FunctionComponent } from "react";
import { CartItemsProps } from "../types/checkout.types";

const CartItems: FunctionComponent<CartItemsProps> = ({
  cartItems,
  grantCheckoutLoading,
  itemCheckedOut,
  handleCheckout
}): JSX.Element => {
  return <div></div>;
};

export default CartItems;
