import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";


const SocialLogIn = () => {
    const {signInWithGoogle} = useAuth()
    
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
           const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = {name:loggedUser.displayName, email: loggedUser.email,  image: loggedUser.photoURL}
            fetch('https://sports-academy-server-evrahim904.vercel.app/users',{
             method: 'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() =>{
            navigate(from, {replace:true})
             
            })
            
        })
        .catch(error => console.log(error))
    }
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