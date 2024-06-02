import {useState} from "react";
import useAddTodo from "./hooks/useAddTodo";
import {InputTodo, ItodoHandler} from "@/types";

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
					<input
						type="text"
						name="text"
						id="text"
						placeholder="masukan sini"
						className="px-5 py-3 rounded-md text-black"
						onChange={(e) => setInput(e.target.value)}
						value={input}
						required
					/>
				</div>

				<button
					type="submit"
					className=" h-max font-medium px-6 py-3 rounded bg-blue-500 hover:bg-blue-700 transition-colors  text-white"
				>
					kirim
				</button>
			</div>
		</form>
	);
}
