export interface todoType {
  value: string;
  isCompleted: boolean;
}

export type todos = Array<todoType>;

export interface todosStoreType {
	todos: todos;
  listIsLoading: boolean;
  listLoaded: boolean;
  listLoadFailed: boolean;
}

export interface storeType {
  todos: todosStoreType;
} 

export default storeType;
