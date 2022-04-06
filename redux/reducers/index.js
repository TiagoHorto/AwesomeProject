import { combineReducers } from "redux"
import { bookReducer, selectedBookReducer } from "./book"
import { shoppingCartReducer } from "./shoppingList";
import { wishListReducer } from "./wishList";

const reducers = combineReducers({
    allBooks: bookReducer,
    book: selectedBookReducer,
    wishList: wishListReducer,
    shoppingCart: shoppingCartReducer,
});

export default reducers;