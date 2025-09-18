import { Box, Button, Container, TextField, Typography } from "@mui/material";

// components
import Copyright from "../Links/Copyright";

const RootFooter = () => {
    return (
        <Box sx={{ bgcolor: "black", color: "white", position: "relative" }}>
            <Container
                maxWidth="xl"
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Typography variant="h6" color="success" fontWeight={700}>
                    Subscribe to our newsletter
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ color: "lightgray" }}>
                    Be informed of the latest updates
                </Typography>
                <Box
                    sx={{
                        width: { xs: "100%", lg: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Email address"
                        sx={{ bgcolor: "white" }}
                    />
                    <Button variant="contained" type="button" size="large" sx={{ fontSize: 14 }}>
                        Subscribe
                    </Button>
                </Box>
            </Container>

            <Copyright brand="BizKit" />
        </Box>
    );
};

export default RootFooter;
