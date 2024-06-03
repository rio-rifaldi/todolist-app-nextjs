"use client";

import {InputTodo, ItodoHandler} from "@/types";
import {useState} from "react";
import AddTodo from "./_component/AddTodo";
import Todo from "./_component/Todo";
import ClearTodo from "./_component/ClearTodo";

export default function Home() {
	const [todos, setTodo] = useState<InputTodo[]>([]);

	const setAddTodohandler = (data: ItodoHandler) => {
		data instanceof Array ? setTodo(data) : setTodo((prev) => [...prev, data]);
	};

	return (
		<main className="mx-6 my-8 max-w-screen-md sm:mx-auto">
			<AddTodo addTodoProps={{setAddTodohandler, todos}} />
			<ul className="my-6 grid gap-2 ">
				{todos.length !== 0 &&
					todos.map(({id, value}) => (
						<Todo
							id={id}
							value={value}
							todoProps={{todosValue: todos, setTodosValue: setAddTodohandler}}
							key={id}
						/>
					))}
			</ul>
			{todos.length !== 0 && <ClearTodo props={{setAddTodohandler}} />}
		</main>
	);
}
