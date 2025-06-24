"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signin } from "@/app/actions/auth";

export default function Page() {
	const [state, action, isLoading] = useActionState(signin, undefined);

	return (
		<main className="flex items-center justify-center">
			<div className="p-8 w-120 ">
				<h1 className="text-3xl font-bold text-left mb-8 text-gray-900">
					Sign In
				</h1>
				{/* Form */}
				<form action={action} className="space-y-6">
					{/* Email Field */}
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							defaultValue={state?.email}
							type="email"
							id="email"
							name="email"
							autoComplete="email"
							className={`w-full px-3 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
								state?.errors?.email
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-blue-500"
							}`}
						/>
						{state?.errors?.email && (
							<p className="text-red-500 text-sm">{state.errors.email}</p>
						)}
					</div>
					{/* Password Field */}
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
							className={`w-full px-3 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 ${
								state?.errors?.password
									? "border-red-500 focus:ring-red-500"
									: "border-gray-300 focus:ring-blue-500"
							}`}
						/>
						{state?.errors?.password && (
							<div className="text-red-500 text-sm">
								<ul>
									{state.errors.password.map((error, index) => (
										<li key={index}>{error}</li>
									))}
								</ul>
							</div>
						)}
					</div>
					{/* Submit Button */}
					<div>
						<button
							disabled={isLoading}
							type="submit"
							className={`w-full py-2 rounded-sm text-white font-medium transition duration-200 ${
								isLoading
									? "bg-gray-300 cursor-not-allowed"
									: "bg-blue-600 hover:bg-blue-500"
							}`}
						>
							{isLoading ? "Loading..." : "Sign In"}
						</button>
					</div>
					{/* Sign Up Link */}
					<p className="text-gray-600 text-sm text-center">
						Don't have an account?{" "}
						<Link href="/signup" className="text-blue-600 hover:underline">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</main>
	);
}
