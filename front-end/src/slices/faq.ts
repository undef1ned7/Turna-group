import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { Faq } from "../type";
type faqState = {
  list: Faq[];
  loading: boolean;
  item: Faq | null;
};
const initialState: faqState = {
  list: [],
  loading: false,
  item: null,
};
const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFaqs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFaqs.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getFaqs.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const getFaqs = createAsyncThunk("/getFaqList", async () => {
  try {
    const { data } = await axiosApi.get("/settings/faq/");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const selectFaqs = (state: RootState) => state.faq.list;
export const selectFaqLoading = (state: RootState) => state.faq.loading;

export default faqSlice.reducer;
