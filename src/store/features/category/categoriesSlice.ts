import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $axios from "../../../utils/axios";
import { AxiosError } from "axios";
import {
  CategoryType,
  SubCategory,
} from "../../../helpers/interfaces/categories.interface";
import { API_URL } from "../../../utils/consts";

interface CategoryState {
  category: CategoryType[];
  subcategories: SubCategory[];
}

const initialState: CategoryState = {
  category: [],
  subcategories: [],
};

const categoryCardlSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (
      state: CategoryState,
      action: PayloadAction<CategoryType[]>
    ) => {
      state.category = action.payload;
    },
    setSubcategories: (
      state: CategoryState,
      action: PayloadAction<SubCategory[]>
    ) => {
      state.subcategories = action.payload;
    },
  },
});

export const fetchCategory = createAsyncThunk<unknown, void>(
  "category/fetchCategory",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`${API_URL}/categories/`);
      dispatch(categoryCardlSlice.actions.setCategory(data));
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);

export const fetchSubcategory = createAsyncThunk<unknown, void>(
  "category/fetchCategory",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $axios.get(`${API_URL}/subcategories/`);
      dispatch(categoryCardlSlice.actions.setSubcategories(data.results));
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);
export const { setCategory } = categoryCardlSlice.actions;
export default categoryCardlSlice.reducer;
