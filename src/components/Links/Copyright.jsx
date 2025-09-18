import { Box, Typography, useTheme } from "@mui/material";

// utils
import colorTokens from "../../utils/colorTokens";

const Copyright = ({ brand }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box
            sx={{
                position: "absolute",
                bottom: 20,
                left: 0,
                right: 0,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="body2" component="p">
                &copy;2025
                <Typography
                    variant="body1"
                    component="span"
                    fontWeight={700}
                    sx={{ mx: 1, color: colors.green[500] }}
                >
                    {brand}&trade;
                </Typography>
                All rights reserved.
            </Typography>
        </Box>
    );
};

export default Copyright;
