"use client";

import Link from "next/link";
import Image from "next/image";

import { CiZoomIn } from "react-icons/ci";

import type { ImageItemProps } from "../_types/gallery";

const ImageItem = ({ item }: ImageItemProps) => {
	return (
		<Link
			href={`/gallery?id=${item?.id}`}
			className="w-fit  mb-2 flex justify-center items-center  relative group  overflow-hidden  hover:scale-[1.02] transition-transform cursor-pointer"
		>
			<Image
				src={item.src}
				alt={item.title}
				width={400}
				height={300}
				className="rounded"
			/>
			<div className="hidden  justify-center items-center rounded group-hover:flex absolute backdrop-blur-xs top-0 bottom-0 end-0 start-0 text-4xl text-white">
				<CiZoomIn />
			</div>
		</Link>
	);
};

export default ImageItem;
