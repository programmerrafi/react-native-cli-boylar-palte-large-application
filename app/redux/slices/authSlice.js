import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.singleQuiz = action.payload
    },
  }
})

export const { updateUser } = authSlice.actions

export const selectUser = state => state.auth.user

export default authSlice.reducer