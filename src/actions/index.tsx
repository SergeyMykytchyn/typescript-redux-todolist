import axios from 'axios';
import { Dispatch } from 'redux';
import {
  addTodoActionCreator,
	deleteTodoActionCreator,
	markCompleteActionCreator,
	markIncompleteActionCreator,
  clearActionCreator
} from "types/actionCreatorType";
import { listLoadStart, listLoadSuccess, listLoadFailed } from "types/actionsType";

export const markComplete: markCompleteActionCreator = (payload) => {
	return {
		type: "MARK_COMPLETE",
		payload,
	};
};

export const markIncomplete: markIncompleteActionCreator = (payload) => {
	return {
		type: "MARK_INCOMPLETE",
		payload,
	};
};

export const deleteTodo: deleteTodoActionCreator = (payload) => {
	return {
		type: "DELETE_TODO",
		payload,
	};
};

export const addTodo: addTodoActionCreator = (payload) => {
	return {
		type: "ADD_TODO",
		payload,
	};
};

export const fetchList = () => async (dispatch: Dispatch<listLoadStart | listLoadSuccess | listLoadFailed>) => {
  try {
    dispatch({ type: "LIST_LOAD_START" });
    const response = await axios.get("http://localhost:3000/todos");
    dispatch({ type: "LIST_LOAD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "LIST_LOAD_FAILED" });
  }
}

export const clear: clearActionCreator = () => {
  return {
    type: "CLEAR"
  };
}
