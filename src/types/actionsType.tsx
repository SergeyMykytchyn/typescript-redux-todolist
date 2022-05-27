import { todos } from "types/storeType";

export interface markCompleteAction {
	type: "MARK_COMPLETE";
	payload: string;
}

export interface markIncompleteAction {
	type: "MARK_INCOMPLETE";
	payload: string;
}

export interface deleteTodoAction {
	type: "DELETE_TODO";
	payload: string;
}

export interface addTodoAction {
  type: "ADD_TODO";
  payload: string;
}

export interface listLoadStart {
  type: "LIST_LOAD_START";
}

export interface listLoadSuccess {
  type: "LIST_LOAD_SUCCESS";
  payload: todos;
}

export interface listLoadFailed {
  type: "LIST_LOAD_FAILED";
}

export interface clearAction {
  type: "CLEAR";
}
