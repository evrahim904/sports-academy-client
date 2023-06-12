import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const AllClasses = ({ allClass }) => {

    const { _id, image, name, instructorName, availableSeats, price } = allClass;
    const { user } = useAuth();
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const cardStyles = {
        backgroundColor: availableSeats === 0 ? 'red' : 'white',

    };

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = { classId: _id, image, name, instructorName, availableSeats, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your item has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                        // fetch(`http://localhost:5000/classes/${item._id}`, {
                        //     method: 'PATCH',
                        // })
                        // .then(res => res.json())
                        // .then(data =>{
                        //     console.log(data)
                        //     if(data.modifiedCount){
                        //         refetch()
                        //         Swal.fire({
                        //             position: 'top-end',
                        //             icon: 'success',
                        //             title: 'Your item has been selected',
                        //             showConfirmButton: false,
                        //             timer: 1500

                        //         })
                        //     }
                        // })

                    }
                })
        }


        else {
            Swal.fire({
                title: 'Please login first to select the item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes,login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            })
        }
    }
    return (

        <div style={cardStyles} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>Instructor name: {instructorName}</p>

                <div className="card-actions justify-between">
                    <div>
                        <div className=" font-semibold">available Seats:{availableSeats}</div>
                        <div className=" font-semibold">Price: ${price}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(allClass)} className="btn btn-primary btn-sm" disabled={availableSeats === 0 || isAdmin || isInstructor}>select</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AllClasses;