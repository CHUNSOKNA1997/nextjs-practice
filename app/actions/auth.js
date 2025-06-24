"use server";

import bcrypt from "bcrypt";
import { getCollections } from "../lib/db";
import { signinDataSchema, signupDataSchema } from "../lib/rules";
import { redirect } from "next/navigation";
import { createSession } from "../lib/sessions";
import { cookies } from "next/headers";

// validate the form data
export async function signup(state, formData) {
	const validatedForm = signupDataSchema.safeParse({
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

export async function signin(state, formData) {
	// validate the form data
	const validatedForm = signinDataSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedForm.success) {
		return {
			errors: validatedForm.error.flatten().fieldErrors,
			email: formData.get("email"),
		};
	}

	// extra validation
	const { email, password } = validatedForm.data;

	// check if there is a user with the email
	const userCollection = await getCollections("users");
	if (!userCollection) {
		return {
			errors: {
				email: "Something went wrong",
			},
		};
	}

	// check if the email is already in the database
	const existUser = await userCollection.findOne({ email });
	if (!existUser) {
		return {
			errors: {
				email: "Email not found",
			},
		};
	}

	// check if the password is correct
	const isPasswordMatch = await bcrypt.compare(password, existUser.password);
	if (!isPasswordMatch) {
		return {
			errors: {
				password: ["Invalid password"],
			},
		};
	}

	// create session
	await createSession(existUser._id.toString());

	// redirect to the home page or dasboard
	redirect("/");
}

export async function signout() {
	// delete the session
	const cookiestore = await cookies();

	// delete the session cookie
	cookiestore.delete("session");

	// redirect to the home page or dasboard
	redirect("/");
}
