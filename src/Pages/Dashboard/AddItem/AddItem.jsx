

import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useSpring, animated } from "react-spring";
import Swal from "sweetalert2";

const AddItem = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

    const onSubmit = data => {
        console.log(data);
        console.log(data);
        const newItem = {
            name: data.name,
            image: data.image,
            instructorImage: user.photoURL,
            instructorName: data.instructor,
            availableSeats: parseFloat(data.seats),
            price: parseFloat(data.price),
            email: data.email,
            status: data.status
        };
        axiosSecure.post("/classes", newItem).then(data => {
            reset();
            console.log("item", data.data.insertedId);
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        });
    };

    return (
        <animated.div style={animationProps} className="w-full px-10">
            <h3 className="uppercase text-center mb-8">add a new item</h3>




            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex">
                    <div className="form-control w-full ">                    <label className="label">
                        <span className="label-text font-semibold">Class name*</span>
                    </label>
                        <input type="text" placeholder="Class name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control ml-4 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class image*</span>
                        </label>
                        <input type="url" placeholder="imageURL"
                            {...register("image", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly
                            {...register("instructor", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control  ml-4 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">instructor email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly
                            {...register("email", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">available seats</span>
                        </label>
                        <input type="number" placeholder="
                    seats"
                            {...register("seats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control ml-4 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <input type="hidden" {...register("status", { required: true })} name="status" value="pending" />
                {/* <input type="hidden" {...register("enrolled", { required: true })} name="status" value="0" /> */}
                <input className="btn bg-orange-500 w-full btn-sm mt-4 " type="submit" value="add item" />
            </form>

        </animated.div>
    );
};

export default AddItem;
