import { Link as RouterLink } from "react-router-dom";
import { Box, Button, useTheme } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const DashboardContentNavbar = ({ moduleMenu }) => {
    const theme = useTheme();
    const trigger = useScrollTrigger();

    const renderModuleMenu = moduleMenu.map(m => (
        <Button
            key={m.title}
            variant="text"
            type="button"
            component={RouterLink}
            to={m.destination}
            color="success"
            startIcon={m.icon}
            sx={{ fontWeight: 700 }}
            size="large"
        >
            {m.title}
        </Button>
    ));

    return (
        <Box
            component="div"
            sx={{
                minHeight: 64,
                width: "100%",
                position: "sticky",
                top: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                bgcolor: theme.palette.background.default,
                px: 2,
                gap: 2,
                boxShadow: 4,
                transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.standard,
                }),
            }}
        >
            {renderModuleMenu}
        </Box>
    );
};

export default DashboardContentNavbar;
