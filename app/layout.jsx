import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="w-full min-h-screen flex flex-col border-b border-zinc-700 bg-zinc-800 text-white text-xl">
				<nav className="w-full flex justify-between px-6 pt-6 border-b border-zinc-700 pb-8">
					<p>NextJs CrashCourse</p>

					<ul className="flex items-center gap-4">
						<li className="hover:text-cyan-500 transition-colors duration-300">
							<Link href="/">Sign In</Link>
						</li>
						<li className="hover:text-cyan-500 transition-colors duration-300">
							<Link href="/">Sign Up</Link>
						</li>
					</ul>
				</nav>
				{/* content */}
				<main className="flex-grow pt-6">{children}</main>
				{/* footer */}
				<footer className="w-full py-4 text-center border-t border-zinc-700 mt-auto text-base">
					<p>
						&copy; {new Date().getFullYear()} NextJs CrashCourse. All rights
						reserved.
					</p>
				</footer>
			</body>
		</html>
	);
}
