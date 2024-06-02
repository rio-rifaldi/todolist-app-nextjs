export type TodoProps = {
	id: string;
	value: string;
	todoProps: {
		todosValue: InputTodo[];
		setTodosValue: (data: ItodoHandler) => void;
	};
};

export type ItodoHandler = InputTodo | InputTodo[];

export type InputTodo = {
	id: string;
	value: string;
};
