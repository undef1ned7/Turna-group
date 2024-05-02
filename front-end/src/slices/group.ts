import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { Group } from "../type";
type faqState = {
  list: Group[];
  loading: boolean;
  item: Group | null;
};
const initialState: faqState = {
  list: [],
  loading: false,
  item: null,
};
const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGroups.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getGroups.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const getGroups = createAsyncThunk("/getGroupList", async () => {
  try {
    const { data } = await axiosApi.get("/team-members/team-members/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const selectGroups = (state: RootState) => state.group.list;
export const selectGroupLoading = (state: RootState) => state.group.loading;

export default groupSlice.reducer;
