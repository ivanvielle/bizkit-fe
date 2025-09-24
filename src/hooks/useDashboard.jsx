import { useContext } from "react";

// context
import { DashboardContext } from "../contexts/DashboardContextProvider";

const useDashboard = () => {
    const dashboardContext = useContext(DashboardContext);

    if (!dashboardContext)
        throw new Error("DashboardContext must be used inside DashboardProvider");

    return dashboardContext;
};

export default useDashboard;
