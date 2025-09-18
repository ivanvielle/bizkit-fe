import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Container,
    Stack,
    Button,
    IconButton,
    Drawer,
    Box,
    Tooltip,
    useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// components
import Brand from "../Links/Brand";
import ToggleModeButton from "../Buttons/ToggleModeButton";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// utils
import colorTokens from "../../utils/colorTokens";

// menu array
const menu = [
    {
        item: "Features",
        to: "/features",
        icon: null,
        color: "text.secondary",
        variant: "text",
    },
    {
        item: "About Us",
        to: "/about",
        icon: null,
        color: "text.secondary",
        variant: "text",
    },
    {
        item: "Contact",
        to: "/contact",
        icon: null,
        color: "text.secondary",
        variant: "text",
    },
];

// auth menu array
const authMenu = [
    {
        item: "Biz hub",
        to: "/dashboard",
        icon: null,
        color: "primary",
        variant: "text",
    },
    {
        item: "Register",
        to: "/register",
        icon: null,
        color: "success",
        variant: "text",
    },
];

// render menu array
const menuItems = (importFunc = null) =>
    menu.map(m => (
        <Button
            key={m.item}
            type="button"
            variant={m.variant}
            component={RouterLink}
            to={m.to}
            size="large"
            sx={{ color: m.color }}
            onClick={importFunc}
        >
            {m.item}
        </Button>
    ));

// render auth menu array
const authMenuItems = (importFunc = null) =>
    authMenu.map(aM => (
        <Button
            key={aM.item}
            type="button"
            color={aM.color}
            variant={aM.variant}
            component={RouterLink}
            to={aM.to}
            size="large"
            onClick={importFunc}
        >
            {aM.item}
        </Button>
    ));

const RootNavbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const trigger = useScrollTrigger();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar elevation={trigger ? 4 : 0} sx={{ bgcolor: theme.palette.background.default }}>
            <Toolbar disableGutters>
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* brand */}
                    <Brand brand="BizKit" destination="/" />

                    {/* desktop menu */}
                    {!isMobile && (
                        <>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                {menuItems()}
                            </Stack>

                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    pl: 2,
                                }}
                            >
                                {authMenuItems()}
                            </Stack>

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
                        </>
                    )}

                    {/* mobile menu */}
                    {isMobile && (
                        <>
                            <IconButton onClick={() => setOpenDrawer(true)}>
                                <MenuIcon fontSize="small" />
                            </IconButton>

                            <Drawer
                                anchor="right"
                                open={openDrawer}
                                onClose={() => setOpenDrawer(false)}
                                sx={{ transition: "all 0.5s ease-in-out" }}
                            >
                                {/* close drawer button */}
                                <IconButton
                                    onClick={() => setOpenDrawer(false)}
                                    sx={{ position: "absolute", top: 20, right: 20 }}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>

                                <Box
                                    sx={{
                                        width: "100vw",
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-evenly",
                                        alignItems: "center",
                                        p: 2,
                                        gap: 2,
                                    }}
                                >
                                    {/* brand */}
                                    <Brand
                                        brand="BizKit"
                                        destination="/"
                                        importFunc={() => setOpenDrawer(false)}
                                    />

                                    <Stack direction="column" spacing={2}>
                                        {menuItems(() => setOpenDrawer(false))}
                                    </Stack>
                                    <Stack direction="column" spacing={2}>
                                        {authMenuItems(() => setOpenDrawer(false))}
                                    </Stack>

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
                                </Box>
                            </Drawer>
                        </>
                    )}
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default RootNavbar;
