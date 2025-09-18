import { Box } from "@mui/material";

// components
import BudgetCalculatorForm from "../../../features/dashboard/tools/BudgetCalculatorForm";

// hooks
import useTitle from "../../../hooks/useTitle";

const BudgetCalculator = () => {
    useTitle("Budget Calculator - BizKit");

    return (
        <Box>
            <BudgetCalculatorForm />
        </Box>
    );
};

export default BudgetCalculator;
