import { Box, Typography, useTheme } from "@mui/material";

// components
import RegistrationForm from "../../components/Forms/RegistrationForm";

// hooks
import useTitle from "../../hooks/useTitle";

// utils
import colorTokens from "../../utils/colorTokens";
const RegisterPage = () => {
    useTitle("Beans - Register");
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box maxWidth="sm" sx={{ width: "100%", p: 2 }}>
            <Typography variant="h4" color={colors.green[500]} textAlign="center" fontWeight={700}>
                Join BizKit
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center">
                Upscale your business
            </Typography>

            <RegistrationForm colors={colors} />
        </Box>
    );
};

export default RegisterPage;
