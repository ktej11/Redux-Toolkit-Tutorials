import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//action creators { ordered, restocked }
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  //state represents multiple reducers and we have a reducer called cake so state.cake
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}
