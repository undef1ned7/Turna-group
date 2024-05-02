import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { Blog, News } from "../type";
type newsState = {
  list: News[];
  loading: boolean;
  item: News | null;
};
const initialState: newsState = {
  list: [],
  loading: false,
  item: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getNewsItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsItem.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.loading = false;
      })
      .addCase(getNewsItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getNews = createAsyncThunk("/getNewsList", async () => {
  try {
    const { data } = await axiosApi.get("/news/news/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getNewsItem = createAsyncThunk<News, number>(
  "/getNewsItem",
  async (id) => {
    try {
      const { data } = await axiosApi.get(`/news/news/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectNews = (state: RootState) => state.news.list;
export const selecNewsItem = (state: RootState) => state.news.item;
export const selecNewsLoading = (state: RootState) => state.news.loading;

export default newsSlice.reducer;
