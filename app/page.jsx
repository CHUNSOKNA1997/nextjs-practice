import getAuthUser from "./lib/getAuthUser";

const Home = async () => {
	const authUser = await getAuthUser();

	console.log(authUser);

	return (
		<div className="w-full max-h-screen flex flex-col items-center justify-center">
			<h1>Welcome back {authUser?.email}!</h1>
		</div>
	);
};

export default Home;
