import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PublishedGrantsState {
  items: any[];
}

const initialPublishedGrantsState: PublishedGrantsState = {
  items: [],
};

export const publishedGrantsSlice = createSlice({
  name: "publishedGrants",
  initialState: initialPublishedGrantsState,
  reducers: {
    setPublishedGrants: (
      state: PublishedGrantsState,
      action: PayloadAction<any[]>
    ) => {
      state.items = action.payload;
    },
  },
});

export const { setPublishedGrants } = publishedGrantsSlice.actions;

export default publishedGrantsSlice.reducer;
