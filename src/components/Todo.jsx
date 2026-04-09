import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/to-do-list.png";
import TodoItems from "./TodoItems";

const Todo = () => {
	const [todoList, setTodoList] = useState(
		localStorage.getItem("todos")
			? JSON.parse(localStorage.getItem("todos"))
			: [],
	);
	const inputRef = useRef();

	const add = () => {
		const inputText = inputRef.current.value.trim();
		if (inputText === "") return null;
		const newTodo = {
			id: Date.now(),
			text: inputText,
			isComplete: false,
		};
		setTodoList((prev) => [...prev, newTodo]);
		inputRef.current.value = "";
	};
	const deleteTodo = (id) => {
		setTodoList((prevTodo) => {
			return prevTodo.filter((todo) => todo.id !== id);
		});
	};
	const toggle = (id) => {
		setTodoList((prevTodo) => {
			return prevTodo.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isComplete: !todo.isComplete };
				}
				return todo;
			});
		});
	};
	const updateTodo = (id, newText) => {
		setTodoList((prevTodo) => {
			return prevTodo.map((todo) => {
				if (todo.id === id) return { ...todo, text: newText };
				return todo;
			});
		});
	};
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todoList));
	}, [todoList]);
	return (
		<div className="bg-white/10 backdrop-blur-lg p-7 border-green-200 border-2 place-self-center w-11/12 max-w-md flex flex-col  min-h-[550px] rounded-xl">
			<div className="">
				{/* title */}
				<div className="flex justify-center items-center gap-3 text-white text-xl font-semibold mb-4">
					<img className="w-8" src={todo_icon} />
					<h1>Todo List</h1>
				</div>
				{/* input box */}
				<div className="flex items-center my-7 bg-white rounded-full shadow-md overflow-hidden">
					<input
						ref={inputRef}
						className="flex-1 h-12 px-5 outline-none text-gray-700"
						type="text"
						placeholder="Add your task..."
					/>
					<button
						onClick={add}
						className="bg-green-500 hover:bg-green-600 transition px-6 h-12 text-white font-medium">
						Add
					</button>
				</div>
				<hr></hr>
			</div>
			{/* todo-list */}
			<div>
				{todoList.map((item, index) => {
					return (
						<TodoItems
							key={item.id}
							id={item.id}
							text={item.text}
							isComplete={item.isComplete}
							deleteTodo={deleteTodo}
							toggle={toggle}
							updateTodo={updateTodo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Todo;
