import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    TextField,
    Link as MuiLink,
    FormControlLabel,
    Typography,
    InputAdornment,
    IconButton,
    Snackbar,
    Alert,
} from "@mui/material";

// icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// hooks
import useAuth from "../../hooks/useAuth";

// api
import { login } from "../../api/authApi";

const LoginForm = ({ colors }) => {
    const navigate = useNavigate();
    const { saveUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwType, setPwType] = useState("password");
    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleShowPw = () => {
        if (pwType === "password") {
            setPwType("text");
        } else {
            setPwType("password");
        }
    };

    const handleLogin = async e => {
        e.preventDefault();
        setLoading(true);
        const result = await login({ email, password });

        if (result.status !== 200) {
            setAlertSeverity("error");
            setSnackbarMessage(result.data.error);
            setOpenSnackbar(true);
        } else {
            const userData = result.data.data;
            setAlertSeverity("success");
            setSnackbarMessage(result.data.message);
            setOpenSnackbar(true);

            setTimeout(() => {
                saveUser(userData);
            }, 1500);
        }

        setLoading(false);
    };

    return (
        <Box
            component="form"
            maxWidth="sm"
            sx={{ my: 2, display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleLogin}
        >
            {/* email / password */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
                <TextField
                    fullWidth
                    autoComplete="false"
                    variant="standard"
                    type="text"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    autoComplete="false"
                    variant="standard"
                    type={pwType}
                    label="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton tabIndex={-1} onClick={handleShowPw}>
                                        {pwType === "password" ? (
                                            <VisibilityIcon color="primary" fontSize="small" />
                                        ) : (
                                            <VisibilityOffIcon color="primary" fontSize="small" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>

            {/* toggle remember me */}
            <FormControlLabel control={<Checkbox />} label="Remember me" />

            {/* actions */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: 2, lg: 0 },
                }}
            >
                <MuiLink
                    component={RouterLink}
                    to="/forgot-password"
                    sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "text.secondary",
                        textDecoration: "underline",
                    }}
                >
                    Forgot password
                </MuiLink>

                <Typography variant="body2" fontSize={14}>
                    Don't have an account yet?{" "}
                    <MuiLink
                        component={RouterLink}
                        to="/register"
                        sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: "underline",
                            color: colors.green[500],
                        }}
                    >
                        Register now
                    </MuiLink>
                </Typography>
            </Box>

            <Button
                variant="contained"
                type="submit"
                sx={{ my: 2 }}
                disabled={loading}
                loading={loading}
            >
                Login
            </Button>

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

export default LoginForm;
