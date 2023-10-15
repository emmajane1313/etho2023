export type CartItemsProps = {
  cartItems: CartItem[];
  grantCheckoutLoading: boolean[];
  itemCheckedOut: boolean[];
  handleCheckout: (item: CartItem) => Promise<void>;
};

export type FulfillmentProps = {
  fulfillment: Fulfillment | undefined;
  setFulfillment: (e: Fulfillment) => void;
};

export interface CartItem {
  size: string;
  color: string;
  amount: number;
  id: string;
  level: number;
}

export interface Fulfillment {
  number: string;
  street: string;
  state: string;
  country: string;
  zip: string;
  name: string;
  contact: string;
}
