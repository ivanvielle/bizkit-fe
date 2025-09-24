import { createContext, useEffect, useState } from "react";

// api
import { getAllUserProperties } from "../api/propertiesApi";

// context
const DashboardContext = createContext(null);

// provider
const DashboardProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProperties = async () => {
        setLoading(true);

        try {
            const result = await getAllUserProperties();
            setProperties(result?.data?.data ?? []);
        } catch (err) {
            console.error(`Failed to fetch properties: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <DashboardContext.Provider value={{ loading, properties }}>
            {children}
        </DashboardContext.Provider>
    );
};

export { DashboardContext, DashboardProvider };
