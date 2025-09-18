import { Box, useTheme } from "@mui/material";

// features
import HeroSection from "../../features/root/welcome/HeroSection";
import FeaturesSection from "../../features/root/welcome/FeaturesSection";

// hooks
import useTitle from "../../hooks/useTitle";

// utils
import colorTokens from "../../utils/colorTokens";

const WelcomePage = () => {
    useTitle("BizKit - The ultimate business starter kit");
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                maxWidth: "100vw",

                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* hero sections */}
            <Box
                component="div"
                className="hero"
                sx={{
                    flex: 1,
                    width: "100%",
                    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <HeroSection colors={colors} />
            </Box>

            {/* features */}
            {/* <Box
                component="div"
                className="features"
                sx={{
                    flex: 1,
                    width: "100%",
                    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FeaturesSection />
            </Box> */}
        </Box>
    );
};

export default WelcomePage;
