const componentsOverrides = {
    MuiButton: {
        defaultProps: {
            size: "small",
        },
        styleOverrides: {
            root: {
                fontSize: 14,
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            size: "small",
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: "none",
            },
        },
    },
    MuiInputLabel: {
        styleOverrides: {},
    },
};

export default componentsOverrides;
