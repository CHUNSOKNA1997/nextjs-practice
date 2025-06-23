import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{/* header navigation */}
				<header>Navigation</header>
				{/* content */}
				<main>{children}</main>
				{/* footer */}
				<footer>Footer</footer>
			</body>
		</html>
	);
}
