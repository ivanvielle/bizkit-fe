import { Box, Typography, useTheme } from "@mui/material";

// components
import LoginForm from "../../components/Forms/LoginForm";

// hooks
import useTitle from "../../hooks/useTitle";

// utils
import colorTokens from "../../utils/colorTokens";

const LoginPage = () => {
    useTitle("Beans - Login");
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box maxWidth="sm" sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" color={colors.blue[500]} textAlign="center" fontWeight={700}>
                Welcome
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center">
                Access your dashboard
            </Typography>

            <LoginForm colors={colors} />
        </Box>
    );
};

export default LoginPage;
