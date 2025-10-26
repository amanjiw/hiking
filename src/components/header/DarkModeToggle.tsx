"use client";

import useDarkmode from "@/hooks/useDarkmode";

import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const DarkModeToggle = () => {
	const { isDark, handleDarkMode } = useDarkmode();
	return (
		<button
			className="text-2xl cursor-pointer shadow-lg border rounded-full p-1  border-gray-800 dark:border-gray-300"
			onClick={() => handleDarkMode(!isDark)}
		>
			{isDark ? (
				<LuSun className="text-white" />
			) : (
				<IoMoonOutline className="text-gray-800" />
			)}
		</button>
	);
};

export default DarkModeToggle;
