import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({children}) => {
    const {user} = useAuth();
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default Private;