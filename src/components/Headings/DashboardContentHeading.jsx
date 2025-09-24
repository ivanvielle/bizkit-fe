import { Box, Container, Typography, useTheme } from "@mui/material";

// utils
import colorTokens from "../../utils/colorTokens";

const DashboardContentHeading = ({ heading }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Container maxWidth="xxl">
            <Typography variant="h6" color={colors.green[500]}>
                {heading}
            </Typography>
        </Container>
    );
};

export default DashboardContentHeading;
