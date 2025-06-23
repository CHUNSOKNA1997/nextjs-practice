"use server";

import bcrypt from "bcrypt";
import { getCollections } from "../lib/db";
import { formDataSchema } from "../lib/rules";
import { redirect } from "next/navigation";
import { createSession } from "../lib/sessions";

// validate the form data
export async function signup(state, formData) {
	const validatedForm = formDataSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	});

	// if the form data is not valid, return the errors
	if (!validatedForm.success) {
		return {
			errors: validatedForm.error.flatten().fieldErrors,
			email: formData.get("email"),
		};
	}

	// extra validation
	const { email, password } = validatedForm.data;

	// check if user is already exist
	const userCollection = await getCollections("users");
	if (!userCollection) {
		return {
			error: {
				email: "Something went wrong",
			},
		};
	}
	// check if the email is already in the database
	const existUser = await userCollection.findOne({ email });
	if (existUser) {
		return {
			error: {
				email: "email is already in used",
			},
		};
	}
	// hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// create the user
	const results = await userCollection.insertOne({
		email,
		password: hashedPassword,
	});

	// create session
	await createSession(results.insertedId);

	// redirect to the home page or dasboard
	redirect("/");
}
