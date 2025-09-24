import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import DashboardContentNavbar from "../../components/Navbars/dashboard/DashboardContentNavbar";

// icons
import StoreIcon from "@mui/icons-material/Store";

// shops menu
const shopsMenu = [
    {
        title: "Shops",
        destination: "/dashboard/shops",
        icon: <StoreIcon />,
    },
];

const ShopsLayout = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <Outlet />
        </Box>
    );
};

export default ShopsLayout;
