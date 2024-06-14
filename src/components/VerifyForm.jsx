import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

export default function VerifyForm() {
	const [code, setCode] = useState("");
	const { email, editEmail, verifyCode } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		verifyCode(code);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="h-full max-w-md flex flex-col items-center justify-center gap-y-5"
		>
			<div className="w-full">
				<span className="font-semibold text-lg">Email Address</span>
				<div className="h-12 w-full inline-flex items-center justify-between mt-2 px-4 text-lg border-2 border-solid border-primary-900 rounded">
					<span>{email}</span>
					<button
						className="font-semibold text-sm text-primary"
						type="button"
						onClick={editEmail}
					>
						edit
					</button>
				</div>
			</div>
			<Input value={code} handleCode={setCode} />
			<Button />
			<p className="text-sm">
				<span>Didn&apos;t receive an email? </span>
				<ResendButton handleSetValue={setCode} />
			</p>
		</form>
	);
}

function Input({ value, handleCode }) {
	const { error } = useAuth();
	const className = `h-12 w-full mt-2 px-4 text-lg border-2 border-solid rounded transition-colors ${
		error
			? "border-red-200 focus:border-error"
			: "border-primary-900 focus:border-primary"
	}`;
	return (
		<div className="input-group">
			<label htmlFor="code" className="font-semibold text-lg">
				Enter OTP
			</label>
			<input
				type="text"
				inputMode="numeric"
				name="code"
				id="code"
				autoComplete="off"
				placeholder="Enter the code"
				value={value}
				onChange={(e) => handleCode(e.target.value)}
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
			{loading ? <Loader className="light sm" /> : "Verify"}
		</button>
	);
}

function ResendButton({ handleSetValue }) {
	const [loading, setLoading] = useState(false);
	const { resendCode } = useAuth();
	const handleClick = async () => {
		setLoading(true);
		const success = await resendCode();
		if (success) {
			handleSetValue("");
		}
		setLoading(false);
	};

	const className = `font-semibold ${
		loading ? "text-gray-500" : "text-primary"
	}`;

	return (
		<button
			className={className}
			onClick={handleClick}
			type="button"
			disabled={loading}
		>
			Resend
		</button>
	);
}
