import React, { useState } from "react";
import { useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState(readTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAdd = todo => {
		setTodos(prev => [...prev, todo]);
	};

	const handleUpdate = updated => {
		setTodos(todos.map(todo => (todo.id === updated.id ? updated : todo)));
	};
	const handleDelete = deleted => {
		setTodos(todos.filter(todo => todo.id !== deleted.id));
	};
	const filtered = getFilterItem(todos, filter);
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{filtered.map(todo => (
					<Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}

function readTodos() {
	console.log("readTodos");
	const todos = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
}

function getFilterItem(todos, filter) {
	if (filter === "all") {
		return todos;
	}
	return todos.filter(todo => todo.status === filter);
}
