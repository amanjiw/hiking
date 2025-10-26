import Link from "next/link";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-dvh">
			<Link
				href="/gallery"
				className="border rounded-2xl hover:scale-105 transition-transform w-36 h-8 flex items-center justify-center border-gray-400 "
			>
				Gallery
			</Link>
		</div>
	);
}
