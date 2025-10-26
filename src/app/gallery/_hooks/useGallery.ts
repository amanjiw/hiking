import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { images } from "@/lib/hikingList";

import type { THikingItem } from "@/types/hiking";

const useGallery = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [selectedHikingItem, setSelectedHikingItem] =
		useState<THikingItem | null>();

	useEffect(() => {
		const id = searchParams.get("id");
		if (!id) setSelectedHikingItem(null);
		const findedItem = id && images.find((item) => item.id === +id);

		console.log(findedItem);
		setSelectedHikingItem(findedItem || null);
	}, [searchParams.get("id")]);

	const handleSelectHikingItem = (item: THikingItem) => {
		setSelectedHikingItem(item);
		router.push(`/gallery?id=${item?.id}`);
	};

	return {
		selectedHikingItem,
		images,
		handleSelectHikingItem,
	};
};

export default useGallery;
