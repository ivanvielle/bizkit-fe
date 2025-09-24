import { Box } from "@mui/material";

// components
import DashboardContentHeading from "../../components/Headings/DashboardContentHeading";

const DashboardPage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 2,
            }}
        >
            <DashboardContentHeading heading="Overview" />
        </Box>
    );
};

export default DashboardPage;
