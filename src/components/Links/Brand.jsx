import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink, useTheme } from "@mui/material";

// utils
import colorTokens from "../../utils/colorTokens";

const Brand = ({ brand, destination, importFunc = null }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <MuiLink
            onClick={importFunc}
            component={RouterLink}
            to={destination}
            sx={{ color: colors.green[500], fontSize: 36, fontWeight: 700 }}
        >
            {brand}
        </MuiLink>
    );
};

export default Brand;
