import { Box, useTheme } from "@mui/material";

const ToolbarSpacer = () => {
    const theme = useTheme();

    return <Box sx={{ ...theme.mixins.toolbar }} />;
};

export default ToolbarSpacer;
