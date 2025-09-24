import { useContext } from "react";

// context
import PropertiesContext from "../contexts/PropertiesContext";

const useProperties = () => {
    const propertyContext = useContext(PropertiesContext);

    if (!propertyContext)
        throw new Error("PropertiesContext must be used inside PropertiesProvider");

    return propertyContext;
};

export default useProperties;
