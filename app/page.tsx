"use client";

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {FormEvent, useEffect, useState} from "react";

type InputTodo = {
	id: string;
	value: string;
};

export default function Home() {
	const [todos, setTodo] = useState<InputTodo[]>([]);
	const [input, setInput] = useState("");
	const [openDialog, setOpenDialog] = useState(false);
	const [updateTodo, setUpdateTodo] = useState("");

	const onsubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newInput = {id: new Date().getTime().toString(), value: input};
		setTodo((prev) => [...prev, newInput]);
		localStorage.setItem("todos", JSON.stringify([...todos, newInput]));
		setInput("");
	};

	const handleClear = () => {
		localStorage.clear();
		setTodo([]);
	};
	const handdleDelete = (id: string) => {
		const newTodo = todos.filter((todo) => todo.id !== id);
		localStorage.setItem("todos", JSON.stringify(newTodo));
		setTodo(newTodo);
	};
	const handdleUpdate = (e: FormEvent<HTMLFormElement>, id: string) => {
		e.preventDefault();
		const filterTodo = todos.filter((todo) => todo.id !== id);
		if (updateTodo.length !== 0) {
			const newTodo = [...filterTodo, {id: new Date().getTime().toString(), value: updateTodo}];
			setTodo(newTodo);
			localStorage.setItem("todos", JSON.stringify(newTodo));
			setUpdateTodo("");
		}
	};
	useEffect(() => {
		const local = localStorage.getItem("todos");
		if (local) {
			const storedTodo = JSON.parse(local);
			setTodo(storedTodo);
		}
	}, []);

	return (
		<main className="mx-6 my-8 max-w-screen-md sm:mx-auto">
			<form action="" onSubmit={onsubmit} autoComplete="off">
				<div className="flex gap-2 items-end">
					<div className="grid gap-3 w-full">
						<input type="text" name="text" id="text" placeholder="masukan sini" className="px-5 py-3 rounded-md text-black" onChange={(e) => setInput(e.target.value)} value={input} required />
					</div>

					<button type="submit" className=" h-max font-medium px-6 py-3 rounded bg-blue-500 hover:bg-blue-700 transition-colors  text-white">
						kirim
					</button>
				</div>
			</form>

			<ul className="my-6 grid ">
				{todos.length !== 0 &&
					todos.map((todo, index) => (
						<div key={todo.id}>
							<Dialog>
								<div className=" flex items-center gap-3 ">
									<li className="bg-purple-800 rounded-md py-2 px-4 w-full text-white">{todo.value}</li>
									<div className="flex gap-1 items-center">
										<button className=" text-white py-2 px-3 rounded-md my-3 bg-red-500 hover:bg-red-700" onClick={() => handdleDelete(todo.id)}>
											Delete
										</button>

										<DialogTrigger asChild>
											<Button size={"sm"} variant={"outline"}>
												{" "}
												Update{" "}
											</Button>
										</DialogTrigger>
									</div>
								</div>
								<DialogContent>
									<DialogTitle className=""> update Todo '{todo.value}'</DialogTitle>
									<form action="" onSubmit={(e) => handdleUpdate(e, todo.id)}>
										<Input className="my-5" onChange={(e) => setUpdateTodo(e.target.value)} value={updateTodo} placeholder={`previous todo : ${todo.value}`} />

										<Button type="submit"> Update </Button>
									</form>
								</DialogContent>
							</Dialog>
						</div>
					))}
			</ul>
			{todos.length !== 0 && (
				<button className="text-white py-2 px-4 rounded-md my-3 bg-orange-500 hover:bg-orange-700" onClick={handleClear}>
					clear
				</button>
			)}
		</main>
	);
}
