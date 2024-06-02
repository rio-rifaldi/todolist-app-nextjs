// @ts-ignore
import {InputTodo} from "@/types";

type Props = {
	todosValue: InputTodo[];
	setTodosValue: (data: InputTodo[]) => void;
};
const useDeleteTodo = ({setTodosValue, todosValue}: Props) => {
	const handleDelete = (id: string) => {
		const newTodo = todosValue.filter((todo) => todo.id !== id);
		localStorage.setItem("todos", JSON.stringify(newTodo));
		setTodosValue(newTodo);
	};

	return {handleDelete};
};

export default useDeleteTodo;
