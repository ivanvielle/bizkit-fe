import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Card,
    Typography,
    Grid,
    CardMedia,
    CardContent,
    Link as MuiLink,
} from "@mui/material";

// hooks
import useTitle from "../../../hooks/useTitle";
import useDashboard from "../../../hooks/useDashboard";

// features
import PropertyCount from "../../../features/dashboard/properties/PropertyCount";
import MostRecentProperty from "../../../features/dashboard/properties/MostRecentProperty";

const PropertiesOverviewPage = () => {
    useTitle("Properties - BizKit");
    const { properties } = useDashboard();

    const renderProperties = properties.map(property => (
        <Grid key={property._id} size={{ xs: 12, lg: 4, xxl: 2 }}>
            <Card
                sx={{
                    minWidth: 250,
                    minHeight: "auto",
                    border: "1px solid",
                }}
            >
                <CardMedia
                    component="img"
                    alt={property.name}
                    height="250"
                    image="https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <CardContent>
                    <MuiLink component={RouterLink} to={`${property._id}`} state={{ property }}>
                        {property.name}
                    </MuiLink>
                    <Typography>Build: {property.build}</Typography>
                    <Typography>Type: {property.type}</Typography>
                </CardContent>
            </Card>
        </Grid>
    ));

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
            }}
        >
            {/* stats */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    py: 2,
                }}
            >
                <PropertyCount />
                <MostRecentProperty />
            </Box>

            {/* property list */}
            <Grid container spacing={2} sx={{ flex: 1, width: "100%" }}>
                {renderProperties}
            </Grid>
        </Box>
    );
};

export default PropertiesOverviewPage;
