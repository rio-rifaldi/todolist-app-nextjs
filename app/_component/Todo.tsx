import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {TodoProps} from "@/types";
import useDeleteTodo from "./hooks/useDeleteTodo";
import UpdateTodo from "./UpdateTodo";
import {FaTrashAlt} from "react-icons/fa";
import {FaPenToSquare} from "react-icons/fa6";

export default function Todo({id, value, todoProps}: TodoProps) {
	const {setTodosValue, todosValue} = todoProps;
	const {handleDelete} = useDeleteTodo({setTodosValue, todosValue});

	return (
		<div key={id}>
			<Dialog>
				<div className=" flex items-center gap-3 ">
					<li className=" bg-slate-50 rounded-md py-2 px-4 w-full shadow-md dark:bg-blue-900 ">{value}</li>
					<div className="flex gap-2 items-center">
						<Button
							onClick={() => handleDelete(id)}
							variant={"destructive"}
							size={"icon"}
							className="hover:bg-red-700"
						>
							<FaTrashAlt className="scale-125" />
						</Button>

						<DialogTrigger asChild>
							<Button size={"icon"}>
								<FaPenToSquare className="scale-125 dark:stroke-white" />
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
