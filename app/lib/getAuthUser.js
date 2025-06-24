import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "./sessions";

export default async function getAuthUser() {
	const cookiestore = await cookies();
	const session = cookiestore.get("session");

	if (session) {
		const user = decrypt(session.value);
		return user;
	}
	return null;
}
