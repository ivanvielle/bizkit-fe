import { useState } from "react";
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";

const BudgetCalculatorForm = () => {
    // BUDGET
    const [budget, setBudget] = useState("");
    const [budgetError, setBudgetError] = useState(false);
    const [budgetErrorMsg, setBudgetErrorMsg] = useState("");
    // PAYMENTS
    const [payments, setPayments] = useState(40);
    const [paymentsResult, setPaymentsResult] = useState("");
    const [paymentsError, setPaymentsError] = useState(false);
    const [paymentsErrorMsg, setPaymentsErrorMsg] = useState("");
    // LUXURIES
    const [luxuries, setLuxuries] = useState(20);
    const [luxuriesResult, setLuxuriesResult] = useState("");
    const [luxuriesError, setLuxuriesError] = useState(false);
    const [luxuriesErrorMsg, setLuxuriesErrorMsg] = useState("");
    // SAVINGS
    const [savings, setSavings] = useState(40);
    const [savingsResult, setSavingsResult] = useState("");
    const [savingsError, setSavingsError] = useState(false);
    const [savingsErrorMsg, setSavingsErrorMsg] = useState("");

    const handleCompute = async () => {
        const b = Number(budget);
        const p = Number(payments);
        const l = Number(luxuries);
        const s = Number(savings);

        checkForError(p, l, s);

        const first = compute(p, b);
        const second = compute(l, b);
        const third = compute(s, b);

        setPaymentsResult(first);
        setLuxuriesResult(second);
        setSavingsResult(third);

        console.log(first, second, third);
    };

    const compute = (ratio, budget) => {
        return Number((ratio / 100) * budget).toFixed(2);
    };

    const reset = e => {
        e.preventDefault();

        // BUDGET
        setBudget("");
        setBudgetError(false);
        setBudgetErrorMsg("");
        // PAYMENTS
        setPayments(50);
        setPaymentsError(false);
        setPaymentsErrorMsg("");
        setPaymentsResult("");
        // LUXURIES
        setLuxuries(30);
        setLuxuriesError(false);
        setLuxuriesErrorMsg("");
        setLuxuriesResult("");
        // SAVINGS
        setSavings(20);
        setSavingsError(false);
        setSavingsErrorMsg("");
        setSavingsResult("");
    };

    const checkForError = (p, l, s) => {
        if (p > 100 || l > 100 || s > 100) {
            // all ratios greater than 100
            setPaymentsError(true);
            setLuxuriesError(true);
            setSavingsError(true);
            setBudgetError(true);

            setBudgetErrorMsg("Payments/Utilities ratio % cannot exceed 100");
            setPaymentsErrorMsg("Payments/Utilities ratio % cannot exceed 100");
            setLuxuriesErrorMsg("Luxuries/Wants ratio % cannot exceed 100");
            setSavingsErrorMsg("Savings/Investments ratio % cannot exceed 100");
        } else if (p + l + s > 100) {
            // total ratios greater than 100
            setPaymentsError(true);
            setLuxuriesError(true);
            setSavingsError(true);

            setPaymentsErrorMsg("Total budget ratio cannot exceed 100%");
            setLuxuriesErrorMsg("Total budget ratio cannot exceed 100%");
            setSavingsErrorMsg("Total budget ratio cannot exceed 100%");
        }
    };

    return (
        <Box
            component="form"
            action={handleCompute}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            {/* TITLE */}
            <Stack direction="column">
                <Typography variant="h3" fontWeight={500} fontSize={{ xs: 20, md: 40 }}>
                    Budget Calculator
                </Typography>

                <Typography variant="h6" fontWeight={500} fontSize={{ xs: 12, md: 20 }}>
                    For smarter spending decisions try the budget calculator
                </Typography>
                <Divider sx={{ height: 2, bgcolor: "text.secondary" }} />
                <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
                    By default, our calculator is set to{" "}
                    <Typography component="span" fontWeight="bold">
                        50/30/20
                    </Typography>{" "}
                    rule, you can adjust the ratio to your preference and find that sweet spot of
                    budgeting that will work for you.
                </Typography>
                <Divider sx={{ height: 2, bgcolor: "text.secondary" }} />
            </Stack>

            {/* RESULTS */}
            <Stack direction="column" spacing={2}>
                <Typography variant="body1" fontSize={{ xs: 12, md: 20 }}>
                    Results:
                </Typography>
                <TextField
                    variant="filled"
                    label={`Payments/Utilities (${Number(payments)}%)*`}
                    value={paymentsResult}
                    disabled
                />
                <TextField
                    variant="filled"
                    label={`Luxuries/Wants (${Number(luxuries)}%)*`}
                    value={luxuriesResult}
                    disabled
                />
                <TextField
                    variant="filled"
                    label={`Savings/Investments (${Number(savings)}%)*`}
                    value={savingsResult}
                    disabled
                />
            </Stack>

            {/* INPUTS */}
            <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                {/* BUDGET */}
                <Stack direction="column">
                    <Typography variant="body1" fontSize={{ xs: 12, md: 20 }}>
                        Budget:
                    </Typography>
                    <TextField
                        variant="standard"
                        label="Enter amount"
                        required
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                        error={budgetError}
                        helperText={budgetErrorMsg}
                        sx={{
                            "& .MuiFormLabel-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                            "& .MuiInput-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                        }}
                    />
                </Stack>

                {/* RATIOS */}
                <Stack direction="column" spacing={2}>
                    <Typography variant="body1" fontSize={{ xs: 12, md: 20 }}>
                        Budget ratios (Total of 100%): E.g. 40% / 20% / 40%
                    </Typography>
                    <TextField
                        variant="standard"
                        label={`Payments/Utilities (${Number(payments)}%)*`}
                        value={payments}
                        onChange={e => setPayments(e.target.value)}
                        error={paymentsError}
                        helperText={paymentsErrorMsg}
                        sx={{
                            "& .MuiFormLabel-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                            "& .MuiInput-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                        }}
                    />
                    <TextField
                        variant="standard"
                        label={`Luxuries/Wants (${Number(luxuries)}%)*`}
                        value={luxuries}
                        onChange={e => setLuxuries(e.target.value)}
                        error={luxuriesError}
                        helperText={luxuriesErrorMsg}
                        sx={{
                            "& .MuiFormLabel-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                            "& .MuiInput-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                        }}
                    />
                    <TextField
                        variant="standard"
                        label={`Savings/Investments (${Number(savings)}%)*`}
                        value={savings}
                        onChange={e => setSavings(e.target.value)}
                        error={savingsError}
                        helperText={savingsErrorMsg}
                        sx={{
                            "& .MuiFormLabel-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                            "& .MuiInput-root": {
                                fontSize: { xs: 12, md: 20 },
                            },
                        }}
                    />
                </Stack>

                {/* COMPUTE BUTTON */}
                <Stack direction="row" spacing={2}>
                    <Button
                        fullWidth
                        type="button"
                        variant="contained"
                        size="large"
                        onClick={e => reset(e)}
                        sx={{ fontSize: { xs: 12, md: 20 }, my: 2 }}
                    >
                        Reset
                    </Button>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="success"
                        size="large"
                        sx={{ color: "#fff", fontSize: { xs: 12, md: 20 }, my: 2 }}
                    >
                        Compute
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default BudgetCalculatorForm;
