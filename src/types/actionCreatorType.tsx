import {
  addTodoAction,
	deleteTodoAction,
	markIncompleteAction,
	markCompleteAction,
  clearAction
} from "./actionsType";

export type markCompleteActionCreator = (payload: string) => markCompleteAction;

export type markIncompleteActionCreator = (
	payload: string
) => markIncompleteAction;

export type deleteTodoActionCreator = (payload: string) => deleteTodoAction;

export type addTodoActionCreator = (payload: string) => addTodoAction;

export type fetchList = () => Promise<void>;

export type clearActionCreator = () => clearAction;
