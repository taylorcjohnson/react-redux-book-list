// Actions are javascript objects with a type and payload of state
// ActionCreators are functions that deliver an action with state for a container

export function selectBook(book) {
  // selectBook is an ActionCreator, return an action - object with type property
  return ({
    type: 'BOOK_SELECTED',
    payload: book
  });
}
