import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
    const Auth = useSelector((store) => store.AuthReducer.Auth)
    const location = useLocation()
    if (!Auth) {
        return (
            <Navigate to="/login" state={{from:location}} replace/>
        )
    }
    return children
}