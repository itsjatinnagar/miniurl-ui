import { useEffect, useRef, useState } from "react";
import unicolor from "../utilities/unicolor";
import { useAuth } from "../contexts/AuthContext";

export default function Profile({ user }) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const color = unicolor(user.email);
	const year = new Date(Number(user.created_at) * 1000).getFullYear();
	const { logout } = useAuth();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative">
			<button
				className="h-10 w-10 flex items-center justify-center rounded-full"
				style={{ backgroundColor: color }}
				onClick={() => setOpen((prev) => !prev)}
			>
				<span className="text-xl font-medium text-white uppercase">
					{user.email.at(0)}
				</span>
			</button>

			{open && (
				<div
					className="profile-card absolute top-full right-0 mt-2 p-3 bg-white rounded-md"
					ref={ref}
				>
					<div className="flex items-center justify-center gap-x-2">
						<div
							className="inline-flex items-center justify-center h-10 w-10 shrink-0 rounded-full"
							style={{ backgroundColor: color }}
						>
							<span className="text-2xl font-medium text-white uppercase">
								{user.email.at(0)}
							</span>
						</div>
						<p className="flex flex-col items-start justify-center gap-y-1">
							<span className="text-lg max-[360px]:text-base">
								{user.email}
							</span>
							<span className="text-sm text-gray-700">
								Member since {year}
							</span>
						</p>
					</div>
					<hr className="my-2 border-primary-950" />
					<button
						className="flex items-center justify-start h-10 w-full rounded hover:bg-error/10"
						onClick={logout}
					>
						<div className="px-1 inline-flex items-center gap-x-1">
							<img src="/images/logout.svg" alt="logout" />
							<span className="text-error">Logout</span>
						</div>
					</button>
				</div>
			)}
		</div>
	);
}
