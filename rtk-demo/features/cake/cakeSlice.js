const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})
//for store
module.exports = cakeSlice.reducer
//for index
module.exports.cakeActions = cakeSlice.actions 
