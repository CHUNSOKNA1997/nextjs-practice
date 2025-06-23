import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = Buffer.from(secretKey, "base64");

// create a json web token with 7 days of expiration
export async function encrypt(payload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("7d")
		.sign(encodedKey);
}

// decrypt the json web token
export async function decrypt(session) {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch {
		console.log("Failed to verify session");
	}
}

// create session
export async function createSession(userId) {
	const expireAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ userId: userId.toString(), expireAt });
	const cookiestore = await cookies();

	cookiestore.set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expireAt,
		sameSite: "lax",
		path: "/",
	});
}
