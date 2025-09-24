const BASE_URL = import.meta.env.VITE_BASE_URL;

const getAllUserProperties = async () => {
    try {
        const response = await fetch(`${BASE_URL}/properties/my-properties-all`, {
            method: "GET",
            credentials: "include",
        });

        const data = await response.json();

        return { status: response.status, data };
    } catch (err) {
        throw new Error(err);
    }
};

export { getAllUserProperties };
