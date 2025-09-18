import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import EcommerceNavbar from "../../components/Navbars/dashboard/ecommerce/EcommerceNavbar";

const EcommerceLayout = () => {
    return (
        <Box>
            <EcommerceNavbar />
            <Outlet />
        </Box>
    );
};

export default EcommerceLayout;
