import request from "../utilities/request";
import validatePattern from "../utilities/validator";

export const sendEmail = async (dispatch, email) => {
	const result = validatePattern(
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		email
	);
	if (!result.isValid) {
		return dispatch({
			type: "SET_ERROR",
			payload: "Invalid Email",
		});
	}

	try {
		dispatch({ type: "SET_LOADING" });
		const response = await request("/login", "POST", { email });
		const data = await response.json();
		if (response.status === 200) {
			dispatch({ type: "SEND_EMAIL", payload: data.email });
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({
			type: "SET_TOAST",
			payload: { type: "error", message: error.message },
		});
	}
};

export const verifyCode = async (dispatch, code) => {
	const result = validatePattern(/^\d{4}$/, code);
	if (!result.isValid) {
		return dispatch({
			type: "SET_ERROR",
			payload: "Invalid OTP",
		});
	}

	try {
		dispatch({ type: "SET_LOADING" });
		const response = await request("/verify", "POST", { code });
		const data = await response.json();
		if (response.status === 200) {
			dispatch({ type: "SET_USER", payload: data.data });
		} else if (response.status === 400) {
			dispatch({ type: "SET_ERROR", payload: data.message });
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({
			type: "SET_TOAST",
			payload: { type: "error", message: error.message },
		});
	}
};

export const editEmail = (dispatch) => {
	dispatch({ type: "EDIT_EMAIL" });
};

export const resendCode = async (dispatch) => {
	try {
		const response = await request("/resend");
		const data = await response.json();
		if (response.status === 200) {
			dispatch({ type: "RESEND" });
			return true;
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({
			type: "SET_TOAST",
			payload: { type: "error", message: error.message },
		});
		return false;
	}
};

export const fetchUser = async (dispatch) => {
	try {
		const response = await request("/user");
		const data = await response.json();
		if (response.status === 200) {
			dispatch({ type: "SET_USER", payload: data.data });
		}
		if (response.status === 500) {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: "SET_TOAST", payload: error.message });
	}
};

export const logout = async (dispatch) => {
	try {
		dispatch({ type: "SET_LOADING" });
		const response = await request("/logout");
		const data = await response.json();
		if (response.status === 200) {
			dispatch({ type: "LOGOUT" });
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		dispatch({ type: "SET_ERROR", payload: error.message });
	}
};
