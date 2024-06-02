import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {TodoProps} from "@/types";
import useDeleteTodo from "./hooks/useDeleteTodo";
import UpdateTodo from "./UpdateTodo";

export default function Todo({id, value, todoProps}: TodoProps) {
	const {setTodosValue, todosValue} = todoProps;

	const {handleDelete} = useDeleteTodo({setTodosValue, todosValue});

	return (
		<div key={id}>
			<Dialog>
				<div className=" flex items-center gap-3 ">
					<li className="bg-purple-800 rounded-md py-2 px-4 w-full text-white">{value}</li>
					<div className="flex gap-1 items-center">
						<button
							className=" text-white py-2 px-3 rounded-md my-3 bg-red-500 hover:bg-red-700"
							onClick={() => handleDelete(id)}
						>
							Delete
						</button>

						<DialogTrigger asChild>
							<Button
								size={"sm"}
								variant={"outline"}
							>
								{" "}
								Update{" "}
							</Button>
						</DialogTrigger>
					</div>
				</div>
				<DialogContent>
					<UpdateTodo updateTodoProps={{id, setTodosValue, value, todosValue}} />
				</DialogContent>
			</Dialog>
		</div>
	);
}
