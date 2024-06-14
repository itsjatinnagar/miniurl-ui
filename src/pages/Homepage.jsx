import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import VerifyForm from "../components/VerifyForm";

export default function Homepage() {
	const { showVerifyForm } = useAuth();

	return (
		<main className="h-full w-full flex">
			<section className="grid-bg sm:flex">
				<div className="gradient"></div>
				<div className="max-w-xl text-center">
					<h1 className="font-bold text-4xl leading-snug text-primary-100 md:text-[42px] lg:text-6xl xl:text-7xl">
						More than just
						<br />
						<span className="text-primary">shorter</span> links
					</h1>
					<p className="mx-auto mt-5 text text-primary-100 md:text-lg lg:text-xl xl:text-2xl">
						Build your brand&apos;s recognition and get detailed
						insights on how your links are performing.
					</p>
				</div>
			</section>
			<section className="px-5 flex flex-col flex-[50%]">
				<div className="flex flex-col items-center flex-1">
					<div className="mt-32 h-12 text-center">
						<img
							src="/images/logo.svg"
							alt="miniurl logo"
							height="29px"
							width="105px"
							className="h-full w-full"
						/>
					</div>
					<div className="-mt-20 flex-1">
						{showVerifyForm ? <VerifyForm /> : <LoginForm />}
					</div>
				</div>
				<footer className="h-10 text-center">
					<p className="text-sm text-gray-500">
						&copy; 2024 MiniUrl. All Rights Reserved.
					</p>
				</footer>
			</section>
		</main>
	);
}
