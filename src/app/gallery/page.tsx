"use client";
import ImageList from "./_components/ImageList";
import SelectedHikingItemModal from "./_components/SelectedHikingItemModal";

export default function GalleryPage() {
	return (
		<div className="mx-auto lg:max-w-[1000px] md:px-20 pt-3 transition-colors mt-14 pb-3">
			<ImageList />
			<SelectedHikingItemModal />
		</div>
	);
}
