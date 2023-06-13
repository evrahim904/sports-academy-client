import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: history = [], } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/payment?email=${user.email}`)
        return res.data;
    })
    return (
        <div className="">
            <h3 className="text-center uppercase mb-8 text-yellow-700">payment  history {history.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-700">
                        <tr>
                            <th>#</th>
                            <th>email</th>
                            <th>transactionId</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((hist,index)=>   <tr key={hist._id}>
                            <th>{index + 1}</th>
                            <td>{hist.email}</td>
                            <td>{hist.transactionId}</td>
                            <td>{hist.date}</td>
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;