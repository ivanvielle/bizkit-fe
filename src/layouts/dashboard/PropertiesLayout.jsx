import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

// components
import DashboardContentNavbar from "../../components/Navbars/dashboard/DashboardContentNavbar";

// icons
import BusinessIcon from "@mui/icons-material/Business";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";

// tools menu
const propertiesMenu = [
    {
        title: "Properties",
        destination: "/dashboard/properties",
        icon: <BusinessIcon />,
    },
    {
        title: "Rentals",
        destination: "rentals",
        icon: <HouseSidingIcon />,
    },
    {
        title: "Owned",
        destination: "owned",
        icon: <HolidayVillageIcon />,
    },
];

const PropertiesLayout = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                pb: 10,
                gap: 2,
            }}
        >
            <Box sx={{ px: 2 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default PropertiesLayout;
