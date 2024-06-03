import {InputTodo} from "@/types";
import ConfirmClear from "./hooks/ConfirmClear";

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
		<>
			<ConfirmClear handleClear={handleClear} />
		</>
	);
}
