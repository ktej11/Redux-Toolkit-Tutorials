import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer
//for cakeview.jsx
export const { ordered, restocked } = cakeSlice.actions
