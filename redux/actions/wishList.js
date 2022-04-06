import { ActionTypes } from "../actionTypes";

export const  addBookToWishList  = addBook => ({
    type: ActionTypes.ADD_BOOK_TO_WISHLIST,
    payload: addBook,
    
});

export const  removeBookFromWishList  = bookId => ({
    type: ActionTypes.REMOVE_BOOK_FROM_WISHLIST,
    payload: bookId
});