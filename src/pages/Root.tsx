import { Navigate } from "react-router-dom";

const Root = () => {
    const hasSeenLanding = localStorage.getItem("hasSeenLanding");

    if (!hasSeenLanding) {
        return <Navigate to="/onboarding" replace />;
    }

    return <Navigate to="/home" replace />;
};

export default Root;
