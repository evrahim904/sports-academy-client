import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddItem = () => {
    const {user} = useAuth()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const onSubmit = data => {
        console.log(data)
        const newItem = {name: data.name, image: data.image ,instructorName: data.instructor, availableSeats: data.seats, price: data.price }
        axiosSecure.post('/classes', newItem)
        .then(data => {
            console.log('item', data.data)
        })
    }
    return (
        <div className="w-full px-10">
            <h3 className="uppercase text-center mb-8">add a new item</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="flex">
              <div className="form-control w-full ">
                    <label className="label">
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
                    <input type="email"  defaultValue={user?.email} readOnly
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
                <input className="btn bg-orange-500 w-full btn-sm mt-4 " type="submit" value="add item" />
            </form>
        </div>
    );
};

export default AddItem;