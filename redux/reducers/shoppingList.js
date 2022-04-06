import { ActionTypes } from "../actionTypes"; 

const initialState = {
    addedBooks: []
};

export const shoppingCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_BOOK_TO_SHOPPINGCART:
            let bookToAdd = payload;
            let currentArrayOfAddedBooks = [...state.addedBooks];
            let numItems = {...bookToAdd, numItems: 1}
            currentArrayOfAddedBooks.push(numItems);
            
            return {
                addedBooks: currentArrayOfAddedBooks,
            };
        case ActionTypes.REMOVE_BOOK_FROM_SHOPPINGCART:
            const indexOfBookToRemove = state.addedBooks.map(book => book.id).indexOf(payload);
            let currArrayOfAddedBooks = [...state.addedBooks];
            if (indexOfBookToRemove > -1) {
                currArrayOfAddedBooks.splice(indexOfBookToRemove, 1);
            }
            return {
                addedBooks: currArrayOfAddedBooks,
            }; 
        case ActionTypes.INCREMENT_ITEMS_IN_SHOPPINGCART:
            const indexOfBookToIncrement = state.addedBooks.map(book => book.id).indexOf(payload);
            let currArrayToIncrement = [...state.addedBooks];
            currArrayToIncrement[indexOfBookToIncrement].numItems = currArrayToIncrement[indexOfBookToIncrement].numItems + 1
            return {
                addedBooks: currArrayToIncrement,
            };
        case ActionTypes.DECREMENT_ITEMS_IN_SHOPPINGCART:
            const indexOfBookToDecrement = state.addedBooks.map(book => book.id).indexOf(payload);
            let currArrayToDecrement = [...state.addedBooks];
            currArrayToDecrement[indexOfBookToDecrement].numItems = currArrayToDecrement[indexOfBookToDecrement].numItems - 1
            if(currArrayToDecrement[indexOfBookToDecrement].numItems === 0){
                currArrayToDecrement.splice(indexOfBookToDecrement, 1);
            }
            return {
                addedBooks: currArrayToDecrement,
            };
        default:
        return state;
    }
}