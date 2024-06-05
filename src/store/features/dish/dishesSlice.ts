import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $axios from "../../../utils/axios";
import { API_URL } from "../../../utils/consts";
import { AxiosError } from "axios";
import { DishesType } from "../../../helpers/interfaces/dishes.interface";

interface DishState {
  dish: DishesType[];
}

const initialState: DishState = {
  dish: [],
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setDish: (state, action: PayloadAction<{ dish: DishesType[] }>) => {
      state.dish = action.payload.dish;
    },
  },
});

export const fetchDish = createAsyncThunk<
  { dish: DishesType[] },
  number,
  { rejectValue: unknown }
>("category/fetchDish", async (id, { dispatch, rejectWithValue }) => {
  try {
    const response = await $axios.get(`${API_URL}/subcategories/${id}/dishes/`);
    const data: { dish: DishesType[] } = {
      dish: response.data,
    };
    dispatch(dishSlice.actions.setDish(data));
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch dish"
      );
    }
    throw error;
  }
});

export const { setDish } = dishSlice.actions;
export default dishSlice.reducer;
