import axios from "axios";
import { ActionTypes } from "../actionTypes";
import {GoogleBooksApiKey} from '../../resources/index';

export const fetchBooks = (search) => async (dispatch) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=${GoogleBooksApiKey}&maxResults=40`);
    dispatch({ type: ActionTypes.FETCH_BOOKS, payload: response.data.items });
};

export const fetchBook = (id) => async (dispatch) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${GoogleBooksApiKey}&maxResults=40`);
    dispatch({ type: ActionTypes.SELECTED_BOOK, payload: response.data });
};

export const setBooks = (books) => {
    return {
        type: ActionTypes.SET_BOOKS, 
        payload: books,
    }
}

export const selectedBook = (book) => {
    return {
        type: ActionTypes.SELECTED_BOOK, 
        payload: book,
    }
}

export const removeSelectedBook = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BOOK,
    }
}