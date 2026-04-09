import React from "react";
import tick from "../assets/tick.png";
import non_tick from "../assets/non-tick.png";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
	return (
		<div className="flex items-center justify-between p-3 mt-2 rounded-xl bg-white/5  border border-white/10 hover:bg-white/10 transition-all duration-200 shadow-sm">
			<div
				onClick={() => toggle(id)}
				className="flex items-center gap-3 cursor-pointer flex-1">
				<div className="flex items-center gap-3 cursor-pointer">
					<img src={isComplete ? tick : non_tick} className="w-6" />
					<p
						className={`text-white text-[16px] decoration-green-500 ${isComplete ? "line-through" : ""}`}>
						{text}
					</p>
				</div>
			</div>
			<div className="flex gap-2">
				<div className="border-green-200 border-2 p-1 rounded-md">
					<img
						src={edit}
						alt=""
						className="w-4 cursor-pointer hover:scale-110 transition"
					/>
				</div>
				<div className="border-green-200 border-2 p-1 rounded-md">
					<img
						onClick={() => deleteTodo(id)}
						src={del}
						className="w-4 cursor-pointer hover:scale-110 transition"
					/>
				</div>
			</div>
		</div>
	);
};

export default TodoItems;
