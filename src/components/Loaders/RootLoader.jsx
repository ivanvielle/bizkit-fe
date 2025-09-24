import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const RootLoader = () => {
    return (
        <Box component="div" sx={{ width: "100%", height: "100vh" }}>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Typography variant="h6">Loading</Typography>
                <CircularProgress color="primary" />
            </Box>
        </Box>
    );
};

export default RootLoader;
