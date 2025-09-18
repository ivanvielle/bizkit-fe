import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

// icons
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Groups2Icon from "@mui/icons-material/Groups2";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MoneyIcon from "@mui/icons-material/Money";

// tools menu
const ecomMenu = [
    {
        title: "Overview",
        destination: "/dashboard/ecommerce",
        icon: <DonutSmallIcon />,
    },
    {
        title: "Shops",
        destination: "shops",
        icon: <StoreMallDirectoryIcon />,
    },
    {
        title: "Orders",
        destination: "orders",
        icon: <ReceiptLongIcon />,
    },
    {
        title: "Inventory",
        destination: "Inventory",
        icon: <InventoryIcon />,
    },
    {
        title: "Warehouse",
        destination: "warehouse",
        icon: <WarehouseIcon />,
    },
    {
        title: "Customers",
        destination: "customers",
        icon: <Groups2Icon />,
    },
    {
        title: "Employees",
        destination: "employees",
        icon: <SupportAgentIcon />,
    },
    {
        title: "Payroll",
        destination: "payroll",
        icon: <MoneyIcon />,
    },
];

const renderEcomMenu = ecomMenu.map(ecM => (
    <Button
        key={ecM.title}
        variant="text"
        type="button"
        component={RouterLink}
        to={ecM.destination}
        color="success"
        startIcon={ecM.icon}
        sx={{ fontWeight: 700 }}
    >
        {ecM.title}
    </Button>
));

const EcommerceNavbar = () => {
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
            {renderEcomMenu}
        </Box>
    );
};

export default EcommerceNavbar;
