import {Button} from "@/components/ui/button";
import {DialogTitle} from "@/components/ui/dialog";
import React from "react";
import useUpdateTodo from "./hooks/useUpdateTodo";
import {Input} from "@/components/ui/input";
import {InputTodo} from "@/types";

type Props = {
	updateTodoProps: {
		setTodosValue: (data: InputTodo[]) => void;
		todosValue: InputTodo[];
		value: string;
		id: string;
	};
};

export default function UpdateTodo({updateTodoProps}: Props) {
	const {setTodosValue, todosValue, id, value} = updateTodoProps;
	const {handleUpdate, setUpdatedTodo, updateTodo} = useUpdateTodo({setTodosValue, todosValue});
	return (
		<>
			<DialogTitle className=""> update Todo '{value}'</DialogTitle>
			<form
				action=""
				onSubmit={(e) => handleUpdate(e, id)}
			>
				<Input
					className="my-5"
					onChange={(e) => setUpdatedTodo(e.target.value)}
					value={updateTodo}
					placeholder={`previous todo : ${value}`}
				/>

				<Button type="submit"> Update </Button>
			</form>
		</>
	);
}
