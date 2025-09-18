import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import RootNavbar from "../components/Navbars/RootNavbar";
import RootFooter from "../components/Footers/RootFooter";
import ToolbarSpacer from "../components/Spacers/ToolbarSpacer";

const RootLayout = () => {
    return (
        <>
            <RootNavbar />
            <ToolbarSpacer />
            <Box component="main" className="content">
                <Outlet />
            </Box>
            <RootFooter />
        </>
    );
};

export default RootLayout;
