export function selectBook(book) {
  // selectBook is an ActionCreator, return an action - object with type property
  return ({
    type: 'BOOK_SELECTED',
    payload: book
  });
  //console.log("Selected: " + book.title);
}
