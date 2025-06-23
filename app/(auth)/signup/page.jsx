"use client";

import { signup } from "@/app/actions/auth";
import { useActionState } from "react";
import Link from "next/link";

const page = () => {
	const [state, action, isLoading] = useActionState(signup, undefined);

	return (
		<main className="flex items-center justify-center">
			<div className="p-8 w-120 ">
				<h1 className="text-3xl font-bold text-letf mb-8 text-gray-900">
					Sign Up
				</h1>

				<form action={action} className="space-y-6">
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
						{state?.errors?.email && (
							<p className="text-red-500 text-sm">{state.errors.email}</p>
						)}
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
						{state?.errors?.password && (
							<div className=" text-red-500 text-sm">
								<p>Password must:</p>
								<ol className="list-disc list-inside">
									{state?.errors?.password.map((error, index) => (
										<li key={index}>{error}</li>
									))}
								</ol>
							</div>
						)}
					</div>

					<div className="space-y-2">
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-gray-700"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{state?.errors?.confirmPassword && (
							<p className="text-red-500 text-sm">
								{state.errors.confirmPassword}
							</p>
						)}
					</div>

					<div className="flex items-center justify-between text-base">
						<button
							disabled={isLoading}
							type="submit"
							className={` ${
								isLoading ? "bg-gray-300" : "bg-blue-600"
							} text-white py-2 px-4 rounded-sm transition duration-200 font-medium`}
						>
							{isLoading ? "Loading..." : "Sign Up"}
						</button>

						<p className="text-gray-600">
							Already have an account?{" "}
							<Link href="/signin" className="text-blue-600 hover:underline">
								Sign In
							</Link>
						</p>
					</div>
				</form>
			</div>
		</main>
	);
};

export default page;
