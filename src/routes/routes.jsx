//
import lazyWrapper from "./lazyWrapper";

// layouts
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
// dashboard layouts
import EcommerceLayout from "../layouts/dashboard/EcommerceLayout";
import PropertiesLayout from "../layouts/dashboard/PropertiesLayout";
import ToolsLayout from "../layouts/dashboard/ToolsLayout";

// pages - root
const Welcome = lazyWrapper(() => import("../pages/root/WelcomePage"));
const Features = lazyWrapper(() => import("../pages/root/FeaturesPage"));
const About = lazyWrapper(() => import("../pages/root/AboutPage"));
const Contact = lazyWrapper(() => import("../pages/root/ContactPage"));

// pages - auth
const Login = lazyWrapper(() => import("../pages/auth/LoginPage"));
const Register = lazyWrapper(() => import("../pages/auth/RegisterPage"));
const ForgotPassword = lazyWrapper(() => import("../pages/auth/ForgotPasswordPage"));

// pages - dashboard
const Dashboard = lazyWrapper(() => import("../pages/dashboard/DashboardPage"));

// ecommerce
const EcommerceOverview = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceOverviewPage")
);
const EcommerceShops = lazyWrapper(() => import("../pages/dashboard/ecommerce/EcommerceShopsPage"));
const EcommerceOrders = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceOrdersPage")
);
const EcommerceInventory = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceInventoryPage")
);
const EcommerceWarehouse = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceWarehousePage")
);
const EcommerceCustomers = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceCustomersPage")
);
const EcommerceEmployees = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommerceEmployeesPage")
);
const EcommercePayroll = lazyWrapper(() =>
    import("../pages/dashboard/ecommerce/EcommercePayrollPage")
);

// properties
const PropertiesOverview = lazyWrapper(() =>
    import("../pages/dashboard/properties/PropertiesOverviewPage")
);
const PropertyRentals = lazyWrapper(() =>
    import("../pages/dashboard/properties/PropertyRentalsPage")
);
const PropertiesOwned = lazyWrapper(() =>
    import("../pages/dashboard/properties/PropertiesOwnedPage")
);
const PropertyTenants = lazyWrapper(() =>
    import("../pages/dashboard/properties/PropertyTenantsPage")
);
const PropertyEmployees = lazyWrapper(() =>
    import("../pages/dashboard/properties/PropertyEmployeesPage")
);

// investments
const InvestmentsOverview = lazyWrapper(() =>
    import("../pages/dashboard/investments/InvestmentsOverviewPage")
);
const StocksOverview = lazyWrapper(() =>
    import("../pages/dashboard/investments/stocks/StocksOverviewPage")
);
const FundsOverview = lazyWrapper(() =>
    import("../pages/dashboard/investments/funds/FundsOverviewPage")
);

// tools
const Notes = lazyWrapper(() => import("../pages/dashboard/tools/Notes"));
const Files = lazyWrapper(() => import("../pages/dashboard/tools/Files"));
const BudgetCalculator = lazyWrapper(() => import("../pages/dashboard/tools/BudgetCalculator"));

const routes = [
    // root
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: "features",
                element: <Features />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    // auth
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
        ],
    },
    // dashboard
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            // ecommerce
            {
                path: "ecommerce",
                element: <EcommerceLayout />,
                children: [
                    {
                        index: true,
                        element: <EcommerceOverview />,
                    },
                    {
                        path: "shops",
                        element: <EcommerceShops />,
                    },
                    {
                        path: "orders",
                        element: <EcommerceOrders />,
                    },
                    {
                        path: "inventory",
                        element: <EcommerceInventory />,
                    },
                    {
                        path: "warehouse",
                        element: <EcommerceWarehouse />,
                    },
                    {
                        path: "customers",
                        element: <EcommerceCustomers />,
                    },
                    {
                        path: "employees",
                        element: <EcommerceEmployees />,
                    },
                    {
                        path: "payroll",
                        element: <EcommercePayroll />,
                    },
                ],
            },
            // properties
            {
                path: "properties",
                element: <PropertiesLayout />,
                children: [
                    {
                        index: true,
                        element: <PropertiesOverview />,
                    },
                    {
                        path: "rentals",
                        element: <PropertyRentals />,
                    },
                    {
                        path: "owned",
                        element: <PropertiesOwned />,
                    },
                    {
                        path: "tenants",
                        element: <PropertyTenants />,
                    },
                    {
                        path: "employees",
                        element: <PropertyEmployees />,
                    },
                ],
            },
            // investments
            {
                path: "investments",
                children: [
                    {
                        index: true,
                        element: <InvestmentsOverview />,
                    },
                    // investments/stocks
                    {
                        path: "stocks",
                        children: [
                            {
                                index: true,
                                element: <StocksOverview />,
                            },
                        ],
                    },
                    // investments/funds
                    {
                        path: "funds",
                        children: [
                            {
                                index: true,
                                element: <FundsOverview />,
                            },
                        ],
                    },
                ],
            },
            // tools
            {
                path: "tools",
                element: <ToolsLayout />,
                children: [
                    {
                        path: "notes",
                        element: <Notes />,
                    },
                    {
                        path: "files",
                        element: <Files />,
                    },
                    {
                        path: "budget-calculator",
                        element: <BudgetCalculator />,
                    },
                ],
            },
        ],
    },
];

export default routes;
