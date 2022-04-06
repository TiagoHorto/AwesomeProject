// BOOKS
export const getBooksToDisplay = (store) =>
     store && store.allBooks && store.allBooks.books ? store.allBooks.books : [];

// WISH LIST
export const checkIfBookOnWishList = (store, bookId) => {
    if (store && store.wishList && store.wishList.addedBooks &&  store.wishList.addedBooks.length > 0){
         let indexOfBook = store.wishList.addedBooks.map(book => book.id).indexOf(bookId);
         return indexOfBook > -1;
    } else {
         return false;
    }
}

export const getBooksAddedToWishList = (store) => 
store && store.wishList && store.wishList.addedBooks ? store.wishList.addedBooks : [];

export const getNumItemsWishList = (store) => {
    return store.wishList.addedBooks.length
}

// SHOPPING CART
export const checkIfBookOnShoppingCart = (store, bookId) => {
    if (store && store.shoppingCart && store.shoppingCart.addedBooks &&  store.shoppingCart.addedBooks.length > 0){
         let indexOfBook = store.shoppingCart.addedBooks.map(book => book.id).indexOf(bookId);
         return indexOfBook > -1;
    } else {
         return false;
    }
}


export const getBooksAddedToShoppingCart = (store) => 
store && store.shoppingCart && store.shoppingCart.addedBooks ? store.shoppingCart.addedBooks : [];

export const getNumItemsShoppingCart = (store) => {
    return store.shoppingCart.addedBooks.length
}

export const getTotalAmountToPay = (store) => 
store && store.shoppingCart && store.shoppingCart.addedBooks &&  store.shoppingCart.addedBooks.length > 0 ?
{
     totalAmountToPay: store.shoppingCart.addedBooks.map(book => 
        (book.numItems * book.saleInfo.listPrice.amount)).reduce((a, b) => a + b, 0),
     shipping: 10,
     shippingLimit: 20,
} : {
     totalAmountToPay: 0,
     shipping: 0,
     shippingLimit: 0,
}


export const checkIfPriceOnBook = (store) => {
    if (store && store.book && store.book.saleInfo && store.book.saleInfo.listPrice && store.book.saleInfo.listPrice.amount !== undefined ){
         return true;
    } else {
         return false;
    }
}