import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components

import DashboardContentNavbar from "../../components/Navbars/dashboard/DashboardContentNavbar";

// tools menu
const toolsMenu = [
    {
        title: "Notes",
        destination: "notes",
    },
    {
        title: "Files",
        destination: "files",
    },
    {
        title: "Budget Calculator",
        destination: "budget-calculator",
    },
    {
        title: "Gold Calculator",
        destination: "gold-calculator",
    },
];

const ToolsLayout = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    );
};

export default ToolsLayout;
