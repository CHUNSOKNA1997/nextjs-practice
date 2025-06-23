"use client";

import Link from "next/link";

const page = () => {
	return (
		<main className="flex items-center justify-center">
			<div className="p-8 w-120 ">
				<h1 className="text-3xl font-bold text-letf mb-8 text-gray-900">
					Sign In
				</h1>

				<form className="space-y-6">
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							autoComplete="email"
							className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="space-y-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="flex items-center justify-between text-base">
						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white w-full rounded-sm transition duration-200 font-medium py-2"
						>
							Sign In
						</button>
					</div>
					<p className="text-gray-600 text-sm">
						Don't have an account?{" "}
						<Link href="/signup" className="text-blue-600 hover:underline">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</main>
	);
};

export default page;
