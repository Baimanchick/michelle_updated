import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/categoriesSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
