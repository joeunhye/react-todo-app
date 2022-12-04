import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
	const [text, setText] = useState("");
	const inpRef = useRef();
	const handleSubmit = e => {
		e.preventDefault();
		if (text.trim().length === 0) {
			return;
		}
		onAdd({
			id: uuidv4(),
			text,
			status: "active",
		});
		setText("");
		inpRef.current.focus();
	};
	const handleChange = e => {
		setText(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input type="text" placeholder="Add Todo" value={text} onChange={handleChange} ref={inpRef} className={styles.input} />
			<button className={styles.button}>Add</button>
		</form>
	);
}
