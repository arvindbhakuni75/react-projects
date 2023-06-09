import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import purchase_book from './BookAction';

function BookContainer() {
    
    const noOfBooks =  useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Book Container</h1>
      <h1>Number of Books : {noOfBooks}</h1>
      <button onClick={()=>dispatch(purchase_book())} >Buy Book</button>
    </div>
  )
}

export default BookContainer
