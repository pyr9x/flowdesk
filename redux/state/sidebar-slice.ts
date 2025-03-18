import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  isSidebarCollasped: boolean;
  isDarkMode: boolean;
};

const initialState = {
    isSidebarCollasped: false,
    isDarkMode: false,
} as initialState;  

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollasped = action.payload;
    },

    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
