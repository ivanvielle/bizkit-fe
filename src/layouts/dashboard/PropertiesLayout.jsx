import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import PropertiesNavbar from "../../components/Navbars/dashboard/properties/PropertiesNavbar";

const PropertiesLayout = () => {
    return (
        <Box>
            <PropertiesNavbar />
            <Outlet />
        </Box>
    );
};

export default PropertiesLayout;
