import {InputTodo} from "@/types";

type Props = {
	props: {
		setAddTodohandler: (data: InputTodo | InputTodo[]) => void;
	};
};

export default function ClearTodo({props: {setAddTodohandler: setTodo}}: Props) {
	const handleClear = () => {
		localStorage.clear();
		setTodo([]);
	};
	return (
		<button
			className="text-white py-2 px-4 rounded-md my-3 bg-orange-500 hover:bg-orange-700"
			onClick={handleClear}
		>
			clear
		</button>
	);
}
