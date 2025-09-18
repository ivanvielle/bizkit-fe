import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

// icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ToggleModeButton from "../../Buttons/ToggleModeButton";

const DashboardNavbar = ({
    drawerWidth,
    collapsedDrawerWidth,
    openDrawer,
    setOpenDrawer,
    theme,
}) => {
    return (
        <AppBar
            elevation={1}
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
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                {/* expand / collapse sidebar button */}
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ color: "green" }}>
                    {openDrawer ? (
                        <KeyboardArrowLeftIcon fontSize="medium" />
                    ) : (
                        <KeyboardArrowRightIcon fontSize="medium" />
                    )}
                </IconButton>

                {/* actions */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <ToggleModeButton />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
