import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { Hotel } from "../type";

type hotelState = {
  list: Hotel[];
  loading: boolean;
  item: Hotel | null;
};
const initialState: hotelState = {
  list: [],
  loading: false,
  item: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHotels.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getHotels.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getHotelItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHotelItem.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.loading = false;
      })
      .addCase(getHotelItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getHotels = createAsyncThunk("/getHotelList", async () => {
  try {
    const { data } = await axiosApi.get("/hotel/hotels/");
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const getHotelItem = createAsyncThunk<Hotel, number>(
  "/getHotelItem",
  async (id) => {
    try {
      const { data } = await axiosApi.get(`/hotel/hotels/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectHotels = (state: RootState) => state.hotel.list;
export const selectHotelItem = (state: RootState) => state.hotel.item;
export const selectHotelLoading = (state: RootState) => state.hotel.loading;

export default hotelSlice.reducer;
