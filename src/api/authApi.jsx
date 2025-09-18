const BASE_URL = import.meta.env.VITE_BASE_URL;

const register = async ({ email, password, confirmPassword }) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        });

        const data = await response.json();

        return { status: response.status, data };
    } catch (err) {
        throw new Error(err);
    }
};

const login = async ({ email, password }) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        return { status: response.status, data };
    } catch (err) {
        throw new Error(err);
    }
};

const logout = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });

        const data = await response.json();

        return { status: response.status, data };
    } catch (err) {
        throw new Error(err);
    }
};

const getMe = async () => {
    try {
        const response = await fetch(`${BASE_URL}/auth/me`, {
            method: "GET",
            credentials: "include",
        });

        const data = await response.json();

        return { status: response.status, data };
    } catch (err) {
        throw new Error(err);
    }
};
export { register, login, logout, getMe };
