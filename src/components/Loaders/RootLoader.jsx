import { Box, Container, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const RootLoader = () => {
    return (
        <Box component="div">
            <Container
                maxWidth="xl"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Typography variant="h6">Loading</Typography>
                <CircularProgress color="primary" />
            </Container>
        </Box>
    );
};

export default RootLoader;
