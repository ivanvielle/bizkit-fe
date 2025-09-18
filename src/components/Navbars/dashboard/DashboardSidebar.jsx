import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Collapse,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@mui/material";

// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// dashboard
import DashboardIcon from "@mui/icons-material/Dashboard";
// ecommerce
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// properties
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
// stores
import StoreIcon from "@mui/icons-material/Store";
// investments
import SavingsIcon from "@mui/icons-material/Savings";
import PieChartIcon from "@mui/icons-material/PieChart";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
// users
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
// tools
import HandymanIcon from "@mui/icons-material/Handyman";
import CalculateIcon from "@mui/icons-material/Calculate";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FolderZipIcon from "@mui/icons-material/FolderZip";

// components
import Brand from "../../Links/Brand";
import ProfileIcon from "../../Buttons/ProfileIcon";

// hooks
import LogoutButton from "../../Buttons/LogoutButton";

const DashboardSidebar = ({ drawerWidth, collapsedDrawerWidth, openDrawer, theme }) => {
    const [submenuOpen, setSubmenuOpen] = useState([]);

    const toggleSubmenu = menuTitle => {
        setSubmenuOpen(prev => ({
            ...prev,
            [menuTitle]: !prev[menuTitle],
        }));
    };

    // submenus
    // investments
    const investmentSubMenu = [
        {
            title: "Stocks",
            destination: "investments/stocks",
            icon: <AreaChartIcon fontSize="small" />,
        },
        {
            title: "Funds",
            destination: "investments/funds",
            icon: <AnalyticsIcon fontSize="small" />,
        },
    ];
    // tools
    const toolsSubMenu = [
        {
            title: "Notes",
            destination: "tools/notes",
            icon: <TextSnippetIcon />,
        },
        {
            title: "Files",
            destination: "tools/files",
            icon: <FolderZipIcon />,
        },
        {
            title: "Budget Calculator",
            destination: "tools/budget-calculator",
            icon: <CalculateIcon fontSize="small" />,
        },
    ];

    // menu
    const menu = [
        {
            title: "Dashboard",
            destination: "/dashboard",
            icon: <DashboardIcon fontSize="small" />,
            expandable: false,
            subMenu: null,
        },
        {
            title: "E-commerce",
            destination: "ecommerce",
            icon: <ShoppingCartIcon fontSize="small" />,
            expandable: false,
            subMenu: null,
        },
        {
            title: "Property",
            destination: "properties",
            icon: <HomeWorkIcon fontSize="small" />,
            expandable: false,
            subMenu: null,
        },
        {
            title: "Stores",
            destination: null,
            icon: <StoreIcon fontSize="small" />,
            expandable: false,
            subMenu: null,
        },
        {
            title: "Investment",
            destination: null,
            icon: <SavingsIcon fontSize="small" />,
            expandable: true,
            expandMoreIcon: <ExpandMore fontSize="small" />,
            expandLessIcon: <ExpandLess fontSize="small" />,
            subMenu: investmentSubMenu,
        },
        {
            title: "Tools",
            destination: null,
            icon: <HandymanIcon fontSize="small" />,
            expandable: true,
            expandMoreIcon: <ExpandMore fontSize="small" />,
            expandLessIcon: <ExpandLess fontSize="small" />,
            subMenu: toolsSubMenu,
        },
    ];

    // render submenu
    const renderSubMenu = subMenu => {
        if (!subMenu) return null;
        return subMenu.map(sM => (
            <Tooltip key={sM.title} title={!openDrawer ? sM.title : ""} placement="right">
                <ListItem disableGutters sx={{ display: "block" }}>
                    <ListItemButton
                        component={RouterLink}
                        to={sM.destination}
                        sx={{
                            pl: openDrawer ? 4 : 2,
                            minHeight: 40,
                            justifyContent: openDrawer ? "flex-start" : "center",
                            transition: theme =>
                                theme.transitions.create(["padding", "justify-content"], {
                                    duration: theme.transitions.duration.shortest,
                                }),
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: openDrawer ? 36 : "auto",
                                mr: openDrawer ? 1 : 0,
                                justifyContent: "center",
                            }}
                        >
                            {sM.icon}
                        </ListItemIcon>

                        {/* show text only when drawer is open */}
                        {openDrawer && (
                            <ListItemText
                                primary={sM.title}
                                slotProps={{ primary: { sx: { fontSize: 13 } } }}
                            />
                        )}
                    </ListItemButton>
                </ListItem>
            </Tooltip>
        ));
    };

    // render menu
    const renderMenu = menu.map(m => (
        <List
            key={m.title}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
            }}
        >
            <Tooltip title={!openDrawer ? m.title : ""} placement="right">
                <ListItemButton
                    onClick={m.expandable ? () => toggleSubmenu(m.title) : undefined}
                    component={!m.expandable ? RouterLink : "div"}
                    {...(!m.expandable ? { to: m.destination } : {})}
                    sx={{
                        minHeight: 48,
                        width: "100%",
                        px: openDrawer ? 2 : 1,
                        justifyContent: openDrawer ? "space-between" : "center",
                        alignItems: "center",
                        transition: theme =>
                            theme.transitions.create(["padding", "justify-content"], {
                                duration: theme.transitions.duration.shortest,
                            }),
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: openDrawer ? 40 : "auto",
                            mr: openDrawer ? 1 : 0,
                            justifyContent: "center",
                        }}
                    >
                        {m.icon}
                    </ListItemIcon>

                    {/* show text only when drawer is open */}
                    {openDrawer && (
                        <ListItemText primary={m.title} sx={{ fontSize: 14, fontWeight: 500 }} />
                    )}

                    {/* expand and collapse icons for submenu */}
                    {m.expandable && (submenuOpen[m.title] ? m.expandLessIcon : m.expandMoreIcon)}
                </ListItemButton>
            </Tooltip>

            <Collapse in={submenuOpen[m.title]} timeout="auto" sx={{ width: "100%" }} unmountOnExit>
                {renderSubMenu(m.subMenu)}
            </Collapse>
        </List>
    ));

    return (
        <Drawer
            anchor="left"
            variant="permanent"
            sx={{
                width: openDrawer ? drawerWidth : collapsedDrawerWidth,
                flexShrink: 0,
                whiteSpace: "nowrap",
                "& .MuiDrawer-paper": {
                    py: 1.3,
                    boxSizing: "border-box",
                    width: openDrawer ? drawerWidth : collapsedDrawerWidth,
                    transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                    overflow: "hidden",
                },
            }}
        >
            {/* Brand / Collapse sidebar button */}
            <Box
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                }}
            >
                <Brand brand={openDrawer ? "BizKit" : "B"} destination="/dashboard" />
            </Box>

            <Divider />

            {/* menu */}
            <Box
                component="div"
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    transition: theme.transitions.create("all", {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.standard,
                    }),
                }}
            >
                {renderMenu}
            </Box>

            <Divider />
            {/* auth actions */}
            <Box
                component="div"
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <ProfileIcon />
                <LogoutButton />
            </Box>
        </Drawer>
    );
};

export default DashboardSidebar;
