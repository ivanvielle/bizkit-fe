import { AppBar, Toolbar, Container, Stack, useTheme } from "@mui/material";

// components
import Brand from "../Links/Brand";
import ToggleModeButton from "../Buttons/ToggleModeButton";

const AuthNavbar = () => {
    const theme = useTheme();

    return (
        <AppBar elevation={0} sx={{ bgcolor: theme.palette.background.default }}>
            <Toolbar disableGutters>
                <Container
                    maxWidth="xl"
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                    {/* brand */}
                    <Brand brand="BizKit" />

                    {/* additional icons */}
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <ToggleModeButton />
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default AuthNavbar;
