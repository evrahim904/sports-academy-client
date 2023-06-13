import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AllClassFromInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApprove = item => {
        fetch(`http://localhost:5000/classes/status/${item._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} has been approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDeny = item => {
        console.log(item)
        fetch(`http://localhost:5000/classes/deny/${item._id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: 'deny' }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} has been denied`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };



    // const handleWrite = (event, item) => {
    //     console.log(item)
    //     event.preventDefault();
    //     const feedback = event.target.feedback.value;

    //     fetch(`http://localhost:5000/classes/feedback/${item._id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({ feedback }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             event.target.reset();
    //             if (data.modifiedCount) {

    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Feedback has been sent',
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         });
    // };


    return (
        <div className="max-w-screen-xl mx-auto">
            <h3 className="uppercase text-center mb-8">all classes information :{classes.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>name</th>
                            <th>Instructor name</th>
                            <th> Instructor email</th>
                            <th> Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(item => <tr key={item._id}>
                            <th>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.instructorName}

                            </td>
                            <td>{item.email}</td>
                            <td>{item.availableSeats}</td>
                            <td>${item.price}</td>
                            <td>{item.status}</td>
                            <th>
                                <button onClick={() => handleApprove(item)} disabled={item.status === 'approved' || item.status === 'denied'} className="btn btn-success btn-sm">approve</button>
                                <button onClick={() => handleDeny(item)} disabled={item.status === 'denied'} className="btn  btn-error btn-sm">deny</button>

                                <Link state={item} to="/dashboard/feedback"><button className="btn  btn-warning btn-sm" >feedback</button></Link>


                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClassFromInstructor;