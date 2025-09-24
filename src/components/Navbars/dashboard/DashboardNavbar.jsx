import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

// icons
import ToggleModeButton from "../../Buttons/ToggleModeButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// dashboard
import DashboardIcon from "@mui/icons-material/Dashboard";
// properties
import HomeWorkIcon from "@mui/icons-material/HomeWork";
// stores
import StoreIcon from "@mui/icons-material/Store";
// investments
import SavingsIcon from "@mui/icons-material/Savings";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
// tools
import HandymanIcon from "@mui/icons-material/Handyman";
import CalculateIcon from "@mui/icons-material/Calculate";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FolderZipIcon from "@mui/icons-material/FolderZip";

import SidebarToggleButton from "../../Buttons/SidebarToggleButton";

// menu
const menu = [
    {
        title: "Dashboard",
        destination: "/dashboard",
        icon: <DashboardIcon fontSize="small" />,
    },
    {
        title: "Shops",
        destination: "shops",
        icon: <StoreIcon fontSize="small" />,
    },
    {
        title: "Properties",
        destination: "properties",
        icon: <HomeWorkIcon fontSize="small" />,
    },
    {
        title: "Investments",
        destination: "investments",
        icon: <SavingsIcon fontSize="small" />,
    },
    {
        title: "Tools",
        destination: "tools",
        icon: <HandymanIcon fontSize="small" />,
    },
];

const DashboardNavbar = ({ drawerWidth, collapsedDrawerWidth, openDrawer, theme }) => {
    const { pathname } = useLocation();

    const renderMenu = menu.map(m => {
        const firstPathSegment = pathname.split("/")[1];
        const secondPathSegment = pathname.split("/")[2];
        const isActive =
            (m.destination === "/dashboard" &&
                firstPathSegment === "dashboard" &&
                !secondPathSegment) ||
            secondPathSegment === m.destination;

        return (
            <Button
                key={m.title}
                component={NavLink}
                variant={isActive ? "contained" : "text"}
                to={m.destination}
                color="success"
                size="large"
                startIcon={m.icon}
            >
                {m.title}
            </Button>
        );
    });

    return (
        <AppBar
            elevation={2}
            sx={{
                bgcolor: theme.palette.background.default,
                maxWidth: openDrawer
                    ? `calc(100vw - ${drawerWidth}px)`
                    : `calc(100vw - ${collapsedDrawerWidth}px)`,
                transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.standard,
                }),
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {/* navigation */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {renderMenu}
                </Box>
                {/* actions */}
                <Box
                    sx={{
                        py: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ToggleModeButton />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
