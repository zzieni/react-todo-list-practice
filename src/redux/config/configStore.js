import { combineReducers, createStore } from '@reduxjs/toolkit';
import todos from '../modules/todos';

const rootReducer = combineReducers({
  todos: todos,
});

const store = createStore(rootReducer);
export default store;
