"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ label, href }) => {
	const pathName = usePathname();
	return (
		<li
			className={`${
				pathName === href
					? "bg-gray-500 text-white"
					: "hover:bg-gray-500 hover:text-white"
			} transition-colors hover:duration-300 px-4 py-2 rounded-sm`}
		>
			<Link href={href}>{label}</Link>
		</li>
	);
};

export default NavLink;
