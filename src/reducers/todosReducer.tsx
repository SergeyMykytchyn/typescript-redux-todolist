import { Reducer } from "redux";
import {
  addTodoAction,
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
  listLoadStart,
  listLoadSuccess,
  listLoadFailed,
  clearAction
} from "types/actionsType";
import { todosStoreType } from "types/storeType";

const initialState: todosStoreType = {
  todos: [],
  listIsLoading: false,
  listLoaded: false,
  listLoadFailed: false
};

const todosReducer: Reducer<
  todosStoreType,
  addTodoAction | deleteTodoAction | markCompleteAction | markIncompleteAction | listLoadStart |
  listLoadSuccess | listLoadFailed | clearAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {...state, todos: [...state.todos, { value: action.payload, isCompleted: false }]};
		case "MARK_COMPLETE":
			return {...state, todos: state.todos.map(item => item.value === action.payload ? {...item, isCompleted: true } : item ) };
    case "MARK_INCOMPLETE":
      return {...state, todos: state.todos.map(item => item.value === action.payload ? {...item, isCompleted: false } : item ) };
		case "DELETE_TODO":
			return {...state, todos: state.todos.filter(item => item.value === action.payload ? false : true ) };
    case "LIST_LOAD_START":
      return {...state, listIsLoading: true };
    case "LIST_LOAD_SUCCESS":
      return {...state, listIsLoading: false, listLoaded: true, todos: action.payload };
    case "LIST_LOAD_FAILED":
      return {...state, listIsLoading: false, listLoaded: true, listLoadFailed: true };
    case "CLEAR":
      return { todos: [], listIsLoading: false, listLoaded: false, listLoadFailed: false };
		default:
			return state;
  }
};

export default todosReducer;
