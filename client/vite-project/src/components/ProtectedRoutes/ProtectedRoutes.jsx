import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    console.log(user)
    if (!user) {
        return <Navigate to="/register" replace />;
    }
    return children;
};

export default ProtectedRoute