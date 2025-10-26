"use client";

import Image from "next/image";

import useGallery from "../_hooks/useGallery";
import useSelectedHikingModal from "../_hooks/useSelectedHikingModal";

import { AnimatePresence, motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

const SelectedHikingItemModal = () => {
	const { selectedHikingItem } = useGallery();
	const { handleClose } = useSelectedHikingModal();

	if (!selectedHikingItem) return;

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={handleClose}
			>
				<motion.div
					className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl max-w-3xl w-full py-2 px-4"
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					onClick={(e) => e.stopPropagation()}
				>
					{/* <Link href="/gallery">s</Link> */}
					<div className="flex flex-col gap-2  w-full  items-center">
						<h3 className="font-bold text-3xl  mb-1">
							{selectedHikingItem?.title}
						</h3>
						<div className="w-full h-[400px] relative shdow-md mb-3">
							<Image
								src={selectedHikingItem?.src}
								fill
								className="object-cover rounded-lg"
								alt={selectedHikingItem?.description}
							/>
						</div>
						{selectedHikingItem?.description}
						<div className="flex items-center">
							<span>
								<IoLocationOutline className="text-amber-600 dark:text-amber-200 text-lg" />
							</span>
							<span>{selectedHikingItem?.location}</span>
						</div>
						<div className="flex gap-1 p-1">
							{selectedHikingItem?.tags.map((tag) => (
								<span
									key={tag}
									className="bg-amber-200 hover:scale-[1.03] cursor-pointer  transition-transform rounded-xl  px-2 shadow-sm dark:text-gray-800"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SelectedHikingItemModal;
