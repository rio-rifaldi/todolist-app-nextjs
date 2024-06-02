import {InputTodo, ItodoHandler} from "@/types";
import {FormEvent, useEffect} from "react";

type Props = {
	input: string;
	todos: InputTodo[];
	setAddTodohandler: (data: ItodoHandler) => void;
	setInput: (data: string) => void;
};
const useAddTodo = ({input, setInput, setAddTodohandler, todos}: Props) => {
	const onsubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newInput = {id: new Date().getTime().toString(), value: input};
		setAddTodohandler(newInput);
		localStorage.setItem("todos", JSON.stringify([...todos, newInput]));
		setInput("");
	};

	useEffect(() => {
		const local = localStorage.getItem("todos");
		if (local) {
			const storedTodo: InputTodo[] = JSON.parse(local);
			setAddTodohandler(storedTodo);
		}
	}, []);

	return {onsubmit};
};
export default useAddTodo;
