import { GET_ITEM, DELETE_ITEM, ADD_ITEM, ITEM_LOADING } from './types';
import axios from 'axios'
import ItemService from './../services/itemServcie';

export const getItems = () => dispatch => {
    dispatch(itemLoading())
    ItemService.getItem('/api/items')
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        })
        )
};

export const deleteItems = (id) =>dispatch=> {
    ItemService.deleteItem("/api/items", id)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
}

export const addItem = (book)=>dispatch => {
    ItemService.addItem("api/items",book).then(res=>{
        console.log(res,"add item response");
        dispatch({
            type:ADD_ITEM,
            payload:res.data
        })
    })
}

export const itemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}