import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLoading: true,
    isServerError: null,
    user: null,
    connections : []
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
    addConnections:(state, action)=>{
      state.connections = action.payload
    },
    removeSingleCollection:(state, action)=>{
      state.connections = state.connections.filter((elem)=>{
        elem.id !== action.payload
      })
    }
  },
});

export const { addUser, removeUser, removeUserLoader, setServerError, addConnections, removeSingleCollection } =
  userSlice.actions;
export default userSlice.reducer;
