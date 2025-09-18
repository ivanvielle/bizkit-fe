import { Suspense, lazy } from "react";

// components
import RootLoader from "../components/Loaders/RootLoader";

const lazyWrapper = (importFunc, { fallback } = {}) => {
    const Component = lazy(importFunc);

    return props => (
        <Suspense fallback={fallback || <RootLoader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default lazyWrapper;
