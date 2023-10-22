import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  collectionList: [],
  reviewsList: [],
  cart: [],
  categoriesList: [],
  favouriteList: [],
  customerChoices: [],
};

const jewelsSlice = createSlice({
  name: "jewels",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCollectionList: (state, action) => {
      state.collectionList = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCategories: (state, action) => {
      state.categoriesList = action.payload;
    },
    setReviews: (state, action) => {
      state.reviewsList = action.payload;
    },
    setFavouriteList: (state, action) => {
      state.favouriteList = action.payload;
    },
    setCustomerChoices: (state, action) => {
      state.customerChoices = action.payload;
    },
  },
});

export const {
  setLoading,
  setCollectionList,
  setCart,
  setCategories,
  setReviews,
  setCustomerChoices,
  setFavouriteList,
} = jewelsSlice.actions;

export default jewelsSlice.reducer;
