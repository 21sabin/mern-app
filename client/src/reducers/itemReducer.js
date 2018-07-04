import uuid from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEM,ITEM_LOADING } from '../actions/types';


const initialState = {
    items: [],
    loading: false
};

// items: [
//     { id: uuid(), name: "Thinking Fast and slow" },
//     { id: uuid(), name: "Harry poter and the Philosopher" },
//     { id: uuid(), name: "7 habits of successfult people" },
//     { id: uuid(), name: "11 Minutes" }
// ]


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM:
           return {
               ...state,
               items:action.payload.data,
               loading:false
           }
            break;
        case DELETE_ITEM:
        console.log(action.payload,"delete reducer")
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            console.log(action.payload, "additem")
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ITEM_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}