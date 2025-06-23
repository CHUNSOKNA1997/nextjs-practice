"use client";
import Navigation from "./components/Navigation";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="w-full min-h-screen flex flex-col border-b border-zinc-700 text-black text-xl">
				<Navigation />
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
