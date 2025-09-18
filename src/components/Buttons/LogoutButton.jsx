import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tooltip, IconButton, Snackbar, Alert } from "@mui/material";

// icons
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// hooks
import useAuth from "../../hooks/useAuth";

// api
import { logout } from "../../api/authApi";

const LogoutButton = () => {
    const { removeUser } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSnackbar = () => {
        setOpenSnackbar(false);
        if (alertSeverity === "success") navigate("/login", { replace: true });
    };

    const handleLogout = async e => {
        e.preventDefault();
        setLoading(true);
        const result = await logout();

        if (result.status !== 200) {
            setAlertSeverity("error");
            setSnackbarMessage(result.data.error);
            setOpenSnackbar(true);
        } else {
            setAlertSeverity("success");
            setSnackbarMessage(result.data.message);
            setOpenSnackbar(true);

            setTimeout(() => {
                removeUser();
            }, 1500);
        }

        setLoading(false);
    };

    return (
        <Box>
            {/* logout button */}
            <Tooltip title="Logout">
                <IconButton color="error" onClick={handleLogout}>
                    <PowerSettingsNewIcon fontSize="medium" />
                </IconButton>
            </Tooltip>

            {/* alert message */}
            <Snackbar
                open={openSnackbar}
                onClose={handleSnackbar}
                autoHideDuration={1500}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbar} severity={alertSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default LogoutButton;
