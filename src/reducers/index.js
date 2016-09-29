// combineReducers brings together all reducers in the application
// Your app state is defined here (almost like an app model)
// Each reducer is in charge of one part of the app state, they
//    are updated depending on action type
// Containers are a bridge (use connect method) between React and
//    Redux - a specialized component that maps app state to the
//    containers props.

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
