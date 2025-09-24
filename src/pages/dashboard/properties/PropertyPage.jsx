import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import { Button, Link as MuiLink, Box } from "@mui/material";

const PropertyPage = () => {
    const { id } = useParams();
    const { state } = useLocation();

    const property = state?.property;
    console.log(property);

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
                <Button>Tenants</Button>
                <Button>Staff</Button>
            </Box>
            <MuiLink component={RouterLink} to="/dashboard/properties">
                Go back
            </MuiLink>
        </Box>
    );
};

export default PropertyPage;
