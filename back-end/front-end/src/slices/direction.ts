import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { Direction } from "../type";
type directionState = {
  list: Direction[];
  loading: boolean;
  item: Direction | null;
};
const initialState: directionState = {
  list: [],
  loading: false,
  item: null,
};
const directionSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDirections.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDirections.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getDirections.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const getDirections = createAsyncThunk("/getDirectionList", async () => {
  try {
    const { data } = await axiosApi.get("/settings/direction/");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const selectDirections = (state: RootState) => state.direction.list;
export const selectDirectionLoading = (state: RootState) =>
  state.direction.loading;

export default directionSlice.reducer;
