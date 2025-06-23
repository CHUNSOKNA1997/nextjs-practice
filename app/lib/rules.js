import { z } from "zod";

export const formDataSchema = z
	.object({
		email: z.string().email("Please enter a valid email address"),
		password: z
			.string()
			.min(6, "Password must be at least 6 characters")
			.regex(/\d/, "Password must contain at least one number"),
		confirmPassword: z
			.string()
			.min(6, "Password must be at least 6 characters"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
