import { Box, Container, Typography, Button } from "@mui/material";

const FeaturesSection = () => {
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
            Features
        </Container>
    );
};

export default FeaturesSection;
