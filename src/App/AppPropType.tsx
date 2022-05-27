import { todos } from "types/storeType";
import {
  addTodoActionCreator,
	deleteTodoActionCreator,
	markCompleteActionCreator,
	markIncompleteActionCreator,
  fetchList,
  clearActionCreator
} from "types/actionCreatorType";

interface AppPropType {
	todos: todos;
  listIsLoading: boolean;
  listLoaded: boolean;
  listLoadFailed: boolean;
  addTodo: addTodoActionCreator;
	deleteTodo: deleteTodoActionCreator;
	markComplete: markCompleteActionCreator;
	markIncomplete: markIncompleteActionCreator;
  fetchList: fetchList,
  clear: clearActionCreator
}

export default AppPropType;
