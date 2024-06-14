import { useAuth } from "../contexts/AuthContext";
import Profile from "./Profile";

export default function Header() {
	const { user } = useAuth();

	return (
		<header className="px-6 bg-white">
			<div className="container mx-auto h-20 flex items-center justify-between">
				<img
					src="/images/logo.svg"
					alt="miniurl logo"
					className="h-7"
					height="29px"
					width="105px"
				/>

				<Profile user={user} />
			</div>
		</header>
	);
}
