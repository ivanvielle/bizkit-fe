import { Tooltip, IconButton } from "@mui/material";

// icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// hooks
import useThemeMode from "../../hooks/useThemeMode";

const ToggleModeButton = () => {
    const { mode, toggleMode } = useThemeMode();

    return (
        <Tooltip title="Toggle theme">
            <IconButton onClick={toggleMode}>
                {mode === "light" ? (
                    <DarkModeIcon color="secondary" fontSize="small" />
                ) : (
                    <LightModeIcon color="warning" fontSize="small" />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ToggleModeButton;
