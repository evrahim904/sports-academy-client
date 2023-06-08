import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";


const SocialLogIn = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div>
            <div className="divider"></div>
           <div className="w-full text-center my-4">
           <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
           <FaGoogle></FaGoogle>
            </button>
           </div>
        </div>
    );
};

export default SocialLogIn;