import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {crateUser} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        crateUser( data.email, data.password)
        .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser)
        })
        .catch(error =>console.log(error))
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span 
                            className="text-orange-500">cannot submit empty email </span>}
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                   

                                })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-orange-500">password is less than 6 characters</p>}
                            {errors.password?.type === 'required' && <p className="text-orange-500">cannot submit empty password </p>}
                            {errors.password?.type === 'pattern' && <p className="text-orange-500">password must have one uppercase and one special characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mb-5 text-center">create a new account? <Link to="/register"> <u className="text-primary">Register</u></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;