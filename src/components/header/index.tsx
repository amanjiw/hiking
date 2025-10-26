import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
	return (
		<div className="fixed w-full  z-10 top-0 backdrop-blur-lg shadow-lg h-14 flex items-center justify-centerx px-10">
			<div className="flex-1 flex gap-3 ">
				<Link href="/" className="">
					Home
				</Link>
				<Link href="/gallery" className="">
					Gallery
				</Link>
			</div>
			<DarkModeToggle />
		</div>
	);
};

export default Header;
