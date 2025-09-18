import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";

// icons
import CookieIcon from "@mui/icons-material/Cookie";

const HeroSection = ({ colors }) => {
    return (
        <Container
            component="div"
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* headline */}
            <Box component="div">
                <Typography variant="h2" component="h2" fontWeight={700} color="text.primary">
                    Grab your{" "}
                    <Typography
                        variant="h2"
                        component="span"
                        fontWeight={700}
                        color={colors.green[500]}
                    >
                        BizKit
                    </Typography>
                </Typography>
            </Box>

            {/* sub headline */}
            <Box component="div">
                <Typography
                    variant="body1"
                    component="p"
                    color="text.secondary"
                    fontSize={{ xs: 13, lg: 26 }}
                    fontWeight={500}
                >
                    Jumpstart your business with the ultimate starter kit
                </Typography>
            </Box>

            {/* call to action */}
            <Button
                component={RouterLink}
                to="/register"
                type="button"
                variant="contained"
                color="success"
                size="large"
                sx={{ my: 4, fontSize: { xs: 16, lg: 24 } }}
                endIcon={<CookieIcon sx={{ fontSize: 24 }} fontSize="large" />}
            >
                Get yours now
            </Button>
        </Container>
    );
};

export default HeroSection;
