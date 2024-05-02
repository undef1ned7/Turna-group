import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
import type { RawQuestion } from "../type";
type questionState = {
  list: RawQuestion | null;
  loading: boolean;
  item: RawQuestion | null;
};
const initialState: questionState = {
  list: null,
  loading: false,
  item: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (bluilder) => {
    bluilder
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(createQuestion.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createQuestion.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const createQuestion = createAsyncThunk<void, RawQuestion>(
  "/create",
  async (question) => {
    try {
      const formData = new FormData();
      const keys = <(keyof RawQuestion)[]>Object.keys(question);
      keys.forEach((key) => {
        const value = question[key];
        if (value !== null) {
          formData.append(key, value);
        }
      });
      await axiosApi.post(`/settings/question/`, question);
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectQuestions = (state: RootState) => state.question.list;
export const selectQuestionItem = (state: RootState) => state.question.item;
export const selectQuestionLoading = (state: RootState) =>
  state.question.loading;

export default questionSlice.reducer;
