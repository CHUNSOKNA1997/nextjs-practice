"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";

const links = [
	{ label: "Sign In", href: "/signin" },
	{ label: "Sign Up", href: "/signup" },
];

const Navigation = () => {
	const pathName = usePathname();
	return (
		<nav className="w-full flex justify-between items-center px-8 py-6 border-b border-zinc-700 bg-zinc-700 text-white">
			<Link
				href="/"
				className={`${
					pathName === "/" ? "bg-gray-500 text-white" : " hover:bg-gay-500"
				} transition-all duration-300 px-5 py-2.5 rounded-lg font-bold text-2xl`}
			>
				NextJs CrashCourse
			</Link>

			<ul className="flex items-center space-x-6">
				{links.map((link) => (
					<NavLink key={link.href} {...link} />
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
