import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    signIn(state, action) {
      state.value = action.payload
    },
    signOut(state){
        state.value = null
    }
  },
});

export const { signIn, signOut } = userSlice.actions; // setState
export default userSlice.reducer; // state
