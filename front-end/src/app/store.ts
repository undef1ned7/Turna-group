import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../slices/blog";
import hotelReducer from "../slices/hotel";
import leadReducer from "../slices/lead";
import newsReducer from "../slices/news";
import tourReducer from "../slices/tour";
import faqReducer from "../slices/faq";
import groupReducer from "../slices/group";
import questionReducer from "../slices/question";
import settingsReducer from "../slices/settings";
import directionReducer from "../slices/direction";
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    hotel: hotelReducer,
    lead: leadReducer,
    news: newsReducer,
    tour: tourReducer,
    faq: faqReducer,
    group: groupReducer,
    question: questionReducer,
    settings: settingsReducer,
    direction: directionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
