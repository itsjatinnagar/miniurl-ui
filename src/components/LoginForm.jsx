import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const { sendEmail } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		sendEmail(email);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="h-full max-w-md flex flex-col items-center justify-center gap-y-5"
		>
			<Input value={email} handleEmail={setEmail} />
			<Button />
			<p className="text-sm text-center text-gray-700">
				MiniUrl is free and your account is private by default. We use
				your email address to connect you to your account.
			</p>
		</form>
	);
}

function Input({ value, handleEmail }) {
	const { error } = useAuth();
	const className = `h-12 w-full mt-2 px-4 text-lg border-2 border-solid rounded transition-colors ${
		error
			? "border-red-200 focus:border-error"
			: "border-primary-900 focus:border-primary"
	}`;

	return (
		<div className="input-group">
			<label htmlFor="email" className="font-semibold text-lg">
				Email Address
			</label>
			<input
				type="text"
				inputMode="email"
				name="email"
				id="email"
				autoComplete="off"
				placeholder="Email Address"
				spellCheck="false"
				value={value}
				onChange={(e) => handleEmail(e.target.value)}
				className={className}
				required
			/>
			{error && <span className="text-sm text-error">{error}</span>}
		</div>
	);
}

function Button() {
	const { loading } = useAuth();
	const className = `inline-flex items-center justify-center h-14 w-full font-semibold text-xl text-white rounded transition-colors ${
		loading ? "bg-primary" : "bg-primary-600 hover:bg-primary"
	}`;

	return (
		<button type="submit" className={className} disabled={loading}>
			{loading ? <Loader className="light sm" /> : "Continue"}
		</button>
	);
}
