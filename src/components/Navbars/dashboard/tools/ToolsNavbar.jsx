import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

// tools menu
const toolsMenu = [
    {
        title: "Notes",
        destination: "notes",
    },
    {
        title: "Files",
        destination: "files",
    },
    {
        title: "Budget Calculator",
        destination: "budget-calculator",
    },
];

const renderToolsMenu = toolsMenu.map(tM => (
    <Button
        key={tM.title}
        variant="text"
        type="button"
        component={RouterLink}
        to={tM.destination}
        color="success"
        sx={{ fontWeight: 700 }}
    >
        {tM.title}
    </Button>
));

const ToolsNavbar = () => {
    return (
        <Box
            component="div"
            sx={{
                minHeight: 64,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 4,
                p: 2,
                gap: 2,
                boxShadow: 4,
            }}
        >
            {renderToolsMenu}
        </Box>
    );
};

export default ToolsNavbar;
