//
import lazyWrapper from "./lazyWrapper";

// layouts
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
// dashboard layouts
import ShopsLayout from "../layouts/dashboard/ShopsLayout";
import PropertiesLayout from "../layouts/dashboard/PropertiesLayout";
import ToolsLayout from "../layouts/dashboard/ToolsLayout";
import InvestmentsLayout from "../layouts/dashboard/InvestmentsLayout";

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

// shops
const ShopsOverview = lazyWrapper(() => import("../pages/dashboard/shops/ShopsOverviewPage"));

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
const PropertyPage = lazyWrapper(() => import("../pages/dashboard/properties/PropertyPage"));

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
const GoldCalculator = lazyWrapper(() => import("../pages/dashboard/tools/GoldCalculator"));

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
            // shops
            {
                path: "shops",
                element: <ShopsLayout />,
                children: [
                    {
                        index: true,
                        element: <ShopsOverview />,
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
                    {
                        path: ":id",
                        element: <PropertyPage />,
                    },
                ],
            },
            // investments
            {
                path: "investments",
                element: <InvestmentsLayout />,
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
                    {
                        path: "gold-calculator",
                        element: <GoldCalculator />,
                    },
                ],
            },
        ],
    },
];

export default routes;
