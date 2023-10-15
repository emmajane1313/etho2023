import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import walletConnectedReducer from "./reducers/walletConnectedSlice";
import lensProfileReducer from "./reducers/lensProfileSlice";
import storeItemsReducer from "./reducers/storeItemsSlice";
import publishedGrantsReducer from "./reducers/publishedGrantsSlice";
import cartItemsReducer from "./reducers/cartItemsSlice";
import cartAnimReducer from "./reducers/cartAnimSlice";
import interactionsCountReducer from "./reducers/interactionsCountSlice";
import reactBoxReducer from "./reducers/reactBoxSlice";

const reducer = combineReducers({
  walletConnectedReducer,
  lensProfileReducer,
  storeItemsReducer,
  publishedGrantsReducer,
  cartItemsReducer,
  cartAnimReducer,
  interactionsCountReducer,
  reactBoxReducer,
});

export const store = configureStore({
  reducer: {
    app: reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
