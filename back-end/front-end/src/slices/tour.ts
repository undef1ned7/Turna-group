import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Tour } from "../type";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
type tourState = {
  list: Tour[];
  loading: boolean;
  item: Tour | null;
};
const initialState: tourState = {
  list: [],
  loading: false,
  item: null,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTours.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTours.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getTours.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getTourItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTourItem.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.loading = false;
      })
      .addCase(getTourItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getTours = createAsyncThunk("/getTourList", async () => {
  try {
    const { data } = await axiosApi.get("/job/jobs/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getTourItem = createAsyncThunk<Tour, number>(
  "/getTourItem",
  async (id) => {
    try {
      const { data } = await axiosApi.get(`/job/jobs/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectTours = (state: RootState) => state.tour.list;
export const selectTourItem = (state: RootState) => state.tour.item;
export const selectTourLoading = (state: RootState) => state.tour.loading;

export default tourSlice.reducer;
