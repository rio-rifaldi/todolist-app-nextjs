// @ts-ignore
import {InputTodo} from "@/types";
import {FormEvent, useState} from "react";

type Props = {
	todosValue: InputTodo[];
	setTodosValue: (data: InputTodo[]) => void;
};

const useUpdateTodo = ({setTodosValue, todosValue}: Props) => {
	const [updateTodo, setUpdateTodo] = useState("");
	const setUpdatedTodo = (data: string) => {
		setUpdateTodo(data);
	};
	const handleUpdate = (e: FormEvent<HTMLFormElement>, id: string) => {
		e.preventDefault();
		const filterTodo = todosValue.filter((todo) => todo.id !== id);
		if (updateTodo.length !== 0) {
			const newTodo = [...filterTodo, {id: new Date().getTime().toString(), value: updateTodo}];
			setTodosValue(newTodo);
			localStorage.setItem("todos", JSON.stringify(newTodo));
			setUpdateTodo("");
		}
	};

	return {handleUpdate, updateTodo, setUpdatedTodo};
};

export default useUpdateTodo;
