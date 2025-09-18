import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    TextField,
    Link as MuiLink,
    Typography,
    InputAdornment,
    IconButton,
    Snackbar,
    Alert,
} from "@mui/material";

// icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// api
import { register } from "../../api/authApi";

const RegistrationForm = ({ colors }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pwType, setPwType] = useState("password");
    const [confirmPwType, setConfirmPwType] = useState("password");
    const [snackbarMessage, setSnackbarMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSnackbar = () => {
        setOpenSnackbar(false);
        if (alertSeverity === "success") navigate("/login", { replace: true });
    };

    const handleShowPw = type => {
        if (type === "default") {
            if (pwType === "password") {
                setPwType("text");
            } else {
                setPwType("password");
            }
        } else if (type === "confirm") {
            if (confirmPwType === "password") {
                setConfirmPwType("text");
            } else {
                setConfirmPwType("password");
            }
        }
    };

    const handleRegister = async e => {
        e.preventDefault();
        setLoading(true);
        const result = await register({ email, password, confirmPassword });

        if (result.status !== 201) {
            setAlertSeverity("error");
            setSnackbarMessage(result.data.error);
            setOpenSnackbar(true);
        } else {
            setAlertSeverity("success");
            setSnackbarMessage(result.data.message);
            setOpenSnackbar(true);
        }

        setLoading(false);
    };

    return (
        <Box
            component="form"
            maxWidth="sm"
            sx={{ my: 2, display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleRegister}
        >
            {/* email / password */}
            <Box
                component="div"
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
                    sx={{
                        "& label.Mui-focused": { color: colors.green[500] },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: colors.green[500],
                        },
                    }}
                />

                <TextField
                    fullWidth
                    autoComplete="false"
                    variant="standard"
                    type={pwType}
                    label="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    sx={{
                        "& label.Mui-focused": {
                            color: colors.green[500],
                        },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: colors.green[500],
                        },
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        tabIndex={-1}
                                        onClick={() => handleShowPw("default")}
                                    >
                                        {pwType === "password" ? (
                                            <VisibilityIcon color="success" fontSize="small" />
                                        ) : (
                                            <VisibilityOffIcon color="success" fontSize="small" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    fullWidth
                    autoComplete="false"
                    variant="standard"
                    type={confirmPwType}
                    label="Confirm password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    sx={{
                        "& label.Mui-focused": {
                            color: colors.green[500],
                        },
                        "& .MuiInput-underline:after": {
                            borderBottomColor: colors.green[500],
                        },
                    }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        tabIndex={-1}
                                        onClick={() => handleShowPw("confirm")}
                                    >
                                        {confirmPwType === "password" ? (
                                            <VisibilityIcon color="success" fontSize="small" />
                                        ) : (
                                            <VisibilityOffIcon color="success" fontSize="small" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>

            {/* actions & links */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="body2" component="p" fontSize={12} fontWeight={700}>
                    * required fields
                </Typography>
                <Typography variant="body2" component="p" fontSize={14}>
                    Already have an account?{" "}
                    <MuiLink
                        component={RouterLink}
                        to="/login"
                        sx={{ fontSize: 14, textDecoration: "underline", color: colors.blue[500] }}
                    >
                        Login
                    </MuiLink>
                </Typography>
            </Box>

            <Button
                variant="contained"
                type="submit"
                color="success"
                sx={{ my: 2 }}
                disabled={loading}
                loading={loading}
            >
                Register
            </Button>

            <Snackbar
                open={openSnackbar}
                onClose={handleSnackbar}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbar} severity={alertSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default RegistrationForm;
