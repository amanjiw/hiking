import React, { useEffect, useState } from "react";

import type { TDarkmodeReturn } from "@/types/dark-mode";

const useDarkmode = (): TDarkmodeReturn => {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDark) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [isDark]);

	const handleDarkMode = (status: boolean) => setIsDark(status);

	return { handleDarkMode, isDark };
};

export default useDarkmode;
