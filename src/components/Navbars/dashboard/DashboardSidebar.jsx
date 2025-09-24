import { Link as RouterLink, useLocation, NavLink } from "react-router-dom";
import {
    Box,
    Collapse,
    Divider,
    Drawer,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    IconButton,
    Typography,
} from "@mui/material";

// components
import Brand from "../../Links/Brand";
import ProfileIcon from "../../Buttons/ProfileIcon";
import SidebarToggleButton from "../../Buttons/SidebarToggleButton";
import LogoutButton from "../../Buttons/LogoutButton";

// icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// dashboard
import DashboardIcon from "@mui/icons-material/Dashboard";
// shops
import StoreIcon from "@mui/icons-material/Store";
// investments
// properties
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SavingsIcon from "@mui/icons-material/Savings";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
// tools
import HandymanIcon from "@mui/icons-material/Handyman";
import CalculateIcon from "@mui/icons-material/Calculate";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FolderZipIcon from "@mui/icons-material/FolderZip";

// dashboard menu
const dashboardMenu = [
    {
        title: "Overview",
        destination: "/dashboard",
        icon: <DashboardIcon />,
    },
];

// shop menu
const shopMenu = [
    {
        title: "Overview",
        destination: "shops",
        icon: <DashboardIcon />,
    },
    {
        title: "Orders",
        destination: "shops/orders",
        icon: <FolderZipIcon />,
    },
    {
        title: "Customers",
        destination: "shops/customers",
        icon: <FolderZipIcon />,
    },
    {
        title: "Employees",
        destination: "shops/employees",
        icon: <FolderZipIcon />,
    },
    {
        title: "Inventory",
        destination: "shops/inventory",
        icon: <FolderZipIcon />,
    },
    {
        title: "Warehouse",
        destination: "shops/warehouse",
        icon: <FolderZipIcon />,
    },
];

// properties menu
const propertiesMenu = [
    {
        title: "Overview",
        destination: "properties",
        icon: <DashboardIcon />,
    },
    {
        title: "Rentals",
        destination: "properties/rentals",
        icon: <HomeWorkIcon />,
    },
    {
        title: "Owned",
        destination: "properties/owned",
        icon: <HomeWorkIcon />,
    },
    {
        title: "Tenants",
        destination: "properties/tenants",
        icon: <HomeWorkIcon />,
    },
];

// investments menu
const investmentsMenu = [
    {
        title: "Overview",
        destination: "investments",
        icon: <DashboardIcon />,
    },
    {
        title: "Stocks",
        destination: "investments/stocks",
        icon: <AreaChartIcon />,
    },
    {
        title: "Funds",
        destination: "investments/funds",
        icon: <AnalyticsIcon />,
    },
];

// tools menu
const toolsMenu = [
    {
        title: "Overview",
        destination: "tools",
        icon: <HandymanIcon />,
    },
    {
        title: "Notes",
        destination: "tools/notes",
        icon: <TextSnippetIcon />,
    },
    {
        title: "Files",
        destination: "tools/files",
        icon: <TextSnippetIcon />,
    },
    {
        title: "Budget Calculator",
        destination: "tools/budget-calculator",
        icon: <CalculateIcon />,
    },
    {
        title: "Gold Calculator",
        destination: "tools/gold-calculator",
        icon: <CalculateIcon />,
    },
];

const DashboardSidebar = ({
    drawerWidth,
    collapsedDrawerWidth,
    openDrawer,
    setOpenDrawer,
    theme,
}) => {
    const { pathname } = useLocation();

    const renderSubMenu = () => {
        const firstPathSegment = pathname.split("/")[1];
        const secondPathSegment = pathname.split("/")[2];
        const thirdPathSegment = pathname.split("/")[3];

        let subMenu;

        switch (secondPathSegment) {
            case "shops":
                subMenu = shopMenu;
                break;
            case "properties":
                subMenu = propertiesMenu;
                break;
            case "investments":
                subMenu = investmentsMenu;
                break;
            case "tools":
                subMenu = toolsMenu;
                break;
            default:
                subMenu = dashboardMenu;
                break;
        }

        return subMenu.map(sM => {
            return (
                <Tooltip key={sM.title} title={openDrawer ? null : sM.title} placement="right">
                    <Button
                        component={NavLink}
                        to={sM.destination}
                        end
                        variant="text"
                        size="large"
                        startIcon={sM.icon}
                        style={({ isActive }) => ({
                            justifyContent: "flex-start",
                            textAlign: "left",
                            width: "100%",
                            color: isActive ? "green" : "gray",
                        })}
                    >
                        {openDrawer && sM.title}
                    </Button>
                </Tooltip>
            );
        });
    };

    return (
        <Drawer
            anchor="left"
            variant="permanent"
            sx={{
                flexShrink: 0,
                whiteSpace: "nowrap",
                "& .MuiDrawer-paper": {
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: openDrawer ? drawerWidth : collapsedDrawerWidth,
                    transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                },
            }}
        >
            {/* Brand / Collapse sidebar button */}
            <Box
                component="div"
                sx={{
                    p: 2,
                    textAlign: "center",
                }}
            >
                <Brand brand={openDrawer ? "BizKit" : "B"} destination="/dashboard" />
            </Box>

            <Divider />

            {/* content menu */}
            <Box
                sx={{
                    flex: 1,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {renderSubMenu()}
            </Box>

            <Divider />

            <Box
                component="div"
                sx={{
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: 2,
                    transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                }}
            >
                {/* expand / collapse sidebar button */}
                <SidebarToggleButton openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                {/* auth actions */}
                <ProfileIcon />
                <LogoutButton />
            </Box>
        </Drawer>
    );
};

export default DashboardSidebar;
