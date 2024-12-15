import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoading: true,
    isServerError: null,
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.isUserLoading = false;
      state.user = action.payload;
      state.isServerError = null;
    },
    removeUser: (state) => {
      state.user = null;
    },
    removeUserLoader: (state) => {
      state.isUserLoading = false;
    },
    setServerError: (state, action) => {
      state.isServerError = action.payload;
    },


  },
});

export const { addUser, removeUser, removeUserLoader, setServerError } =
  userSlice.actions;
export default userSlice.reducer;
