import React, { useState } from "react";
import tick from "../assets/tick.png";
import non_tick from "../assets/non-tick.png";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";

const TodoItems = ({
	text,
	id,
	isComplete,
	deleteTodo,
	toggle,
	updateTodo,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(text);

	const handleUpdate = (e) => {
		e.preventDefault();
		if (newText.trim() === "") return;
		updateTodo(id, newText);
		setIsEditing(false);
	};

	return (
		<div className="flex items-center justify-between p-3 mt-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 shadow-sm">
			{/* LEFT SIDE */}
			<div className="flex items-center gap-3 flex-1">
				<img
					onClick={() => toggle(id)}
					src={isComplete ? tick : non_tick}
					className="w-6 cursor-pointer"
				/>

				{isEditing ? (
					<input
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
						className="px-2 py-1 rounded text-black"
					/>
				) : (
					<p
						className={`text-white text-[16px] ${isComplete ? "line-through" : ""}`}>
						{text}
					</p>
				)}
			</div>

			{/* RIGHT SIDE */}
			<div className="flex gap-2">
				<div className="border-green-200 border-2 p-1 rounded-md">
					{isEditing ? (
						<button
							type="button"
							onClick={handleUpdate}
							className="text-green-400 text-xs">
							Save
						</button>
					) : (
						<img
							onClick={() => setIsEditing(true)}
							src={edit}
							className="w-4 cursor-pointer hover:scale-110 transition"
						/>
					)}
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
