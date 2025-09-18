import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

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
    {
        title: "Tenants",
        destination: "tenants",
        icon: <GroupsIcon />,
    },
    {
        title: "Employees",
        destination: "employees",
        icon: <BadgeIcon />,
    },
];

const renderPropertiesMenu = propertiesMenu.map(pM => (
    <Button
        key={pM.title}
        variant="text"
        type="button"
        component={RouterLink}
        to={pM.destination}
        color="success"
        startIcon={pM.icon}
        sx={{ fontWeight: 700 }}
    >
        {pM.title}
    </Button>
));

const PropertiesNavbar = () => {
    return (
        <Box
            component="div"
            sx={{
                minHeight: 64,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 4,
                p: 2,
                gap: 2,
                boxShadow: 4,
            }}
        >
            {renderPropertiesMenu}
        </Box>
    );
};

export default PropertiesNavbar;
