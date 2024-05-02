import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RawLead } from "../type";
import { RootState } from "../app/store";
import axiosApi from "../services/axiosApi";
type leadState = {
  list: RawLead | null;
  loading: boolean;
  item: RawLead | null;
};
const initialState: leadState = {
  list: null,
  loading: false,
  item: null,
};

const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (bluilder) => {
    bluilder
      .addCase(createLead.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLead.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createLead.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const createLead = createAsyncThunk<void, RawLead>(
  "/create",
  async (lead) => {
    try {
      const formData = new FormData();
      const keys = <(keyof RawLead)[]>Object.keys(lead);
      keys.forEach((key) => {
        const value = lead[key];
        if (value !== null) {
          formData.append(key, value);
        }
      });
      await axiosApi.post("/settings/form/", lead);
    } catch (error) {
      console.log(error);
    }
  }
);

export const selectLeads = (state: RootState) => state.lead.list;
export const selectLeadItem = (state: RootState) => state.lead.item;
export const selectLeadLoading = (state: RootState) => state.lead.loading;

export default leadSlice.reducer;
