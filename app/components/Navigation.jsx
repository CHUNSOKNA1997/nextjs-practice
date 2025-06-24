import NavLink from "./NavLink";
import getAuthUser from "../lib/getAuthUser";
import { signout } from "../actions/auth";

const Navigation = async () => {
	const authUser = await getAuthUser();

	return (
		<nav className="w-full flex justify-between items-center px-8 py-6 border-b border-zinc-700 bg-zinc-700 text-white">
			<p className="font-bold text-2xl">NextJs CrashCourse</p>

			<ul className="flex items-center space-x-6">
				{authUser ? (
					<>
						<NavLink label={"Dashboard"} href={"/"} />
						<form action={signout}>
							<button className="hover:bg-gray-500 hover:text-white transition-colors hover:duration-300 px-4 py-2 rounded-sm hover:cursor-pointer">
								Sign Out
							</button>
						</form>
					</>
				) : (
					<>
						<NavLink label={"Sign In"} href={"/signin"} />
						<NavLink label={"Sign Up"} href={"/signup"} />
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
