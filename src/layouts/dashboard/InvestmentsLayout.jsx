import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

// components
import DashboardContentNavbar from "../../components/Navbars/dashboard/DashboardContentNavbar";

// icons
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const investmentSubMenu = [
    {
        title: "Stocks",
        destination: "stocks",
        icon: <AreaChartIcon fontSize="small" />,
    },
    {
        title: "Funds",
        destination: "funds",
        icon: <AnalyticsIcon fontSize="small" />,
    },
];

const InvestmentsLayout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box sx={{ px: 2 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default InvestmentsLayout;
