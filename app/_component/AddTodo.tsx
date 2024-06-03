import {useState} from "react";
import useAddTodo from "./hooks/useAddTodo";
import {InputTodo, ItodoHandler} from "@/types";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type Props = {
	addTodoProps: {
		todos: InputTodo[];
		setAddTodohandler: (data: ItodoHandler) => void;
	};
};

export default function AddTodo({addTodoProps: {setAddTodohandler, todos}}: Props) {
	const [input, setInput] = useState("");
	const {onsubmit} = useAddTodo({input, setInput, setAddTodohandler, todos});
	return (
		<form
			action=""
			onSubmit={onsubmit}
			autoComplete="off"
		>
			<div className="flex gap-2 items-end">
				<div className="grid gap-3 w-full">
					<Input
						type="text"
						name="text"
						id="text"
						placeholder="What will you do..."
						// className="px-5 py-3 rounded-md text-black"
						onChange={(e) => setInput(e.target.value)}
						value={input}
						required
					/>
				</div>

				<Button
					type="submit"
					size={"lg"}
				>
					Add
				</Button>
			</div>
		</form>
	);
}
