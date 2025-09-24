import { Box, Card, CardContent, Typography } from "@mui/material";

// hooks
import useDashboard from "../../../hooks/useDashboard";

const MostRecentProperty = () => {
    const { properties } = useDashboard();
    const mostRecentProperty = properties.at(-1);

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card sx={{ borderRadius: 4 }}>
                <CardContent
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}
                >
                    <Typography gutterBottom variant="h6" fontWeight={700}>
                        Most Recent Property:
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {!mostRecentProperty ? "NaN" : mostRecentProperty.name}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MostRecentProperty;
