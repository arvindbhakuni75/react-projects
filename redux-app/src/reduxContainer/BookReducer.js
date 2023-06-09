
import {buy_book} from './BookType';

const initialState = {
    NumberOfBooks : 20
}

const BookReducer = (state= initialState, action) => {
    switch(action.type) {
        case buy_book: return {
            ...initialState, NumberOfBooks : state - 1
        }
        default : return state
    }
}

export default BookReducer;