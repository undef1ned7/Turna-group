import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Blog, RawBlog } from "../type";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
type blogState = {
  list: Blog[];
  loading: boolean;
  item: Blog | null;
};
const initialState: blogState = {
  list: [],
  loading: false,
  item: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getBlogs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getBlogItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogItem.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.loading = false;
      })
      .addCase(getBlogItem.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createBlog.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getBlogs = createAsyncThunk("/getList", async () => {
  try {
    const { data } = await axiosApi.get("/blog/blogs/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getBlogItem = createAsyncThunk<Blog, number>(
  "/getItem",
  async (id) => {
    try {
      const { data } = await axiosApi.get(`/blog/blogs/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createBlog = createAsyncThunk<void, RawBlog>(
  "/create",
  async (blog) => {
    try {
      const formData = new FormData();
      const keys = <(keyof RawBlog)[]>Object.keys(blog);
      keys.forEach((key) => {
        const value = blog[key];
        if (value !== null) {
          formData.append(key, value);
        }
      });
      await axiosApi.post(`/blog/blogs/`, formData);
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectBlogs = (state: RootState) => state.blog.list;
export const selectBlogItem = (state: RootState) => state.blog.item;
export const selectBlogLoading = (state: RootState) => state.blog.loading;

export default blogSlice.reducer;
