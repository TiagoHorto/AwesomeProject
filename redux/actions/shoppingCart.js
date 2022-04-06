import { ActionTypes } from "../actionTypes";

export const  addBookToShoppingCart  = addBook => ({
    type: ActionTypes.ADD_BOOK_TO_SHOPPINGCART,
    payload: addBook,
    
});

export const  removeBookFromShoppingCart  = bookId => ({
    type: ActionTypes.REMOVE_BOOK_FROM_SHOPPINGCART,
    payload: bookId
});

export const  incrementItemsInShoppingCart  = bookId => ({
    type: ActionTypes.INCREMENT_ITEMS_IN_SHOPPINGCART,
    payload: bookId,
    
});

export const  decrementItemsInShoppingCart  = bookId => ({
    type: ActionTypes.DECREMENT_ITEMS_IN_SHOPPINGCART,
    payload: bookId,
    
});