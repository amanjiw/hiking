import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const useSelectedHikingModal = () => {
	const router = useRouter();

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	const handleClose = () => {
		router.back();
	};

	return {handleClose};
};

export default useSelectedHikingModal;
