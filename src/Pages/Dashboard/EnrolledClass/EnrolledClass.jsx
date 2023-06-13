import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClass = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: enroll = [], } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/payment?email=${user.email}`)
        return res.data;
    })

    return (
        <div>
            <h3 className="uppercase mb-8 text-center">My enrolled Classes {enroll.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold">
                            <th >#</th>
                            <th>className</th>
                            <th>instructorName</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enroll.map((enrolled, index )=>
                            
                            <tr key={enrolled._id}>

                            <th>{index+1}</th>
                            <td>{enrolled.className}</td>
                            <td>{enrolled.instructorName}</td>
                            <td>${enrolled.price}</td>
                        </tr>
                            
                            )}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;