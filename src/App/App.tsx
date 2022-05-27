import React, { useRef, useEffect } from "react";
import {
	Container,
	ListGroup,
	ListGroupItem,
	InputGroup,
	FormControl,
	Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo, deleteTodo, markComplete, markIncomplete, fetchList, clear } from "actions/index";
import storeType, { todoType } from "types/storeType";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({
	todos,
	listIsLoading,
  listLoaded,
  listLoadFailed,
  addTodo,
	deleteTodo,
	markComplete,
	markIncomplete,
  fetchList,
  clear
}) => {

  useEffect(() => {
    fetchList();
    return () => {
      clear();
    }
  }, []);

	const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Complete" | "Incomplete") => {
		const looper = type === "Complete" ? todos.filter((item) => item.isCompleted) : todos.filter((item) => !item.isCompleted);
		return (
			<ListGroup variant="flush" className="m-2">
				<h3>{type}</h3>
				{looper.map((todo: todoType, index: number) => {
					return (
						<ListGroupItem
							key={index}
							variant={type === "Complete" ? "success" : "danger"}
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<div>{todo.value}</div>
							<div>
								<i
									className={`fas fa-${
										type === "Complete" ? "minus" : "check"
									} m-2`}
                  style={{ cursor: "pointer" }}
									onClick={() => {
										type === "Complete"
											? markIncomplete(todo.value)
											: markComplete(todo.value);
									}}
								></i>
								<i
									className="fas fa-trash m-2"
                  style={{ cursor: "pointer" }}
									onClick={() => deleteTodo(todo.value)}
								></i>
							</div>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	};

	const addTodoHandler = () => {
		if (input.current) {
			const val = input.current.value;
			input.current.value = "";
			addTodo(val);
		}
	};

	return (
		<Container>
			<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input} />
					<Button variant="secondary" onClick={() => addTodoHandler()}>
						Add
					</Button>
			</InputGroup>
      { listIsLoading ? <h1>Todo list is loading</h1> : null }
			{ listLoaded && !listLoadFailed ? renderList("Incomplete") : null }
			{ listLoaded && !listLoadFailed ? renderList("Complete") : null }
		</Container>
	);
};

const mapStateToProps = (state: storeType) => {
	return {
		todos: state.todos.todos,
    listIsLoading: state.todos.listIsLoading,
    listLoaded: state.todos.listLoaded,
    listLoadFailed: state.todos.listLoadFailed
	};
};

export default connect(mapStateToProps, {
  addTodo,
	deleteTodo,
	markComplete,
	markIncomplete,
  fetchList,
  clear
})(App);
