import { createSlice } from '@reduxjs/toolkit'

export const hightNavbar = createSlice({
  name: 'hightNavbar',
  initialState: {
    value: 0
  },
  reducers: {
    setHightNavbar: (state, action) => {
      state.value = action.payload
      console.log(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setHightNavbar } = hightNavbar.actions

export default hightNavbar.reducer
