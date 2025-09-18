import { IconButton, Tooltip } from "@mui/material";

// icons
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

// hooks
import useAuth from "../../hooks/useAuth";

const ProfileIcon = () => {
    const { user } = useAuth();

    return (
        <Tooltip title={user.email} placement="right">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
        </Tooltip>
    );
};

export default ProfileIcon;
