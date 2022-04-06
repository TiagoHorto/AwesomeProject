import { ActionTypes } from "../actionTypes"; 

const initialState = {
    addedBooks: [],
};

export const wishListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_BOOK_TO_WISHLIST:
            let bookToAdd = payload;
            let currentArrayOfAddedBooks = [...state.addedBooks];
            currentArrayOfAddedBooks.push(bookToAdd);
            return {
                
                addedBooks: currentArrayOfAddedBooks,
            };
        case ActionTypes.REMOVE_BOOK_FROM_WISHLIST:
            const indexOfBookToRemove = state.addedBooks.map(book => book.id).indexOf(payload);
            let currArrayOfAddedBooks = [...state.addedBooks];
            if (indexOfBookToRemove > -1) {
                currArrayOfAddedBooks.splice(indexOfBookToRemove, 1);
            }
            return {
                addedBooks: currArrayOfAddedBooks,
            }; 
        default:
        return state;
    }
}