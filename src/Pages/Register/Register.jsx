import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogIn from "../../Components/SocialLogIn/SocialLogIn";
const Register = () => {
    const {createUser,updateUserProfile} = useAuth()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser( data.email, data.password)
        .then(result => {
            const LoggedUser = result.user;
            console.log(LoggedUser)
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                const saveUser = {name:data.name, email: data.email, image: data.photo , role: 'student'}
               fetch('https://sports-academy-server-evrahim904.vercel.app/users',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
               })
               .then(res => res.json())
               .then(data =>{
                if(data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registration successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
               })


                
            })
            navigate('/')
        })

        .catch(error =>console.log(error))
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration</h1>
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                        </div>
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
                                <span className="label-text">photo URL</span>
                            </label>
                            <input type="url" {...register("photo")} placeholder="photo URL" className="input input-bordered" />
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/


                                })} placeholder="Confirm Password" className="input input-bordered" />
                            {errors.password?.type === 'minLength' && <p className="text-orange-500">password is less than 6 characters</p>}
                            {errors.password?.type === 'required' && <p className="text-orange-500">cannot submit empty password </p>}
                            {errors.password?.type === 'pattern' && <p className="text-orange-500">password must have one uppercase and one special characters</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mb-5 text-center">already have an account? please <Link to="/login"> <u className="text-primary">login</u></Link> </p>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default Register;