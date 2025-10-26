import { images } from "@/lib/hikingList";

import ImageItem from "./ImageItem";

import type { THikingItem } from "@/types/hiking";

const ImageList = () => {
	return (
		<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 ">
			{images.map((item: THikingItem) => {
				return <ImageItem key={item.id} item={item} />;
			})}
		</div>
	);
};

export default ImageList;
