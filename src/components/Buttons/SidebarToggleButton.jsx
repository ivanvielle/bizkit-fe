import { Tooltip, Button, Typography } from "@mui/material";

// icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const SidebarToggleButton = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Tooltip title={openDrawer ? null : "Expand Sidebar"} placement="right">
            <Button
                onClick={() => setOpenDrawer(!openDrawer)}
                variant="outlined"
                size="large"
                color="success"
                startIcon={openDrawer ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
            >
                {openDrawer && "Collapse"}
            </Button>
        </Tooltip>
    );
};

export default SidebarToggleButton;
