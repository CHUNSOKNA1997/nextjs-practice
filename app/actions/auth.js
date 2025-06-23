"use server";

import { formDataSchema } from "../thirdparty/rules";

export async function signup(state, formData) {
	const validatedForm = formDataSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	});

	if (!validatedForm.success) {
		return {
			errors: validatedForm.error.flatten().fieldErrors,
			email: formData.get("email"),
		};
	}
}
