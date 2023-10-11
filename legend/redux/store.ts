import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import walletConnectedReducer from "./reducers/walletConnectedSlice";
import lensProfileReducer from "./reducers/lensProfileSlice";
import storeItemsReducer from "./reducers/storeItemsSlice";
import publishedGrantsReducer from "./reducers/publishedGrantsSlice";
import cartItemsReducer from "./reducers/cartItemsSlice";

const reducer = combineReducers({
  walletConnectedReducer,
  lensProfileReducer,
  storeItemsReducer,
  publishedGrantsReducer,
  cartItemsReducer,
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
