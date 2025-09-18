import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import ToolsNavbar from "../../components/Navbars/dashboard/tools/ToolsNavbar";

const ToolsLayout = () => {
    return (
        <Box>
            <ToolsNavbar />
            <Outlet />
        </Box>
    );
};

export default ToolsLayout;
