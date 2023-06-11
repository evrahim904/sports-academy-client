import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    const {data: isAdmin, isAdmin: isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data.admin;
        },
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;