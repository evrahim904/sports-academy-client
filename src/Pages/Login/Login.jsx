

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogIn from "../../Components/SocialLogIn/SocialLogIn";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const { signIn } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const LoggedUser = result.user;
                console.log(LoggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })

            .catch(error => console.log(error))
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                            <input  type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered " />
                            {errors.email && <span
                                className="text-orange-500">cannot submit empty email </span>}

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input id="password" type={showPassword ? 'text' : 'password'} {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/


                                })} placeholder="password" className="input input-bordered " />
                            {showPassword ? (
                                <FaEyeSlash
                                    id="showPassword"
                                    onClick={toggleShowPassword}
                                    className="absolute top-14 right-1 text-gray-400 cursor-pointer"
                                />
                            ) : (
                                <FaEye
                                    id="showPassword"
                                    onClick={toggleShowPassword}
                                    className="absolute top-14 right-1 text-gray-400 cursor-pointer"
                                />
                            )}
                            {errors.password?.type === 'minLength' && <p className="text-orange-500">password is less than 6 characters</p>}
                            {errors.password?.type === 'required' && <p className="text-orange-500">cannot submit empty password </p>}
                            {errors.password?.type === 'pattern' && <p className="text-orange-500">password must have one uppercase and one special characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary " type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mb-5 text-center ">create a new account? <Link to="/register"> <u className="text-primary ">Register</u></Link> </p>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default Login;

