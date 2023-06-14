import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const InstructorRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [ isInstructor,isInstructorLoading  ] = useAdmin()
    const location = useLocation()
    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>

    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to="/ErrorPage" state={{from:location}} replace></Navigate>
};

export default InstructorRoute;