import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useMyClass = () => {
    const {user,loading} = useAuth()
const token = localStorage.getItem('access-token');
const { refetch, data: classes = [] } = useQuery({
    queryKey:['classes', user?.email],
    enabled: !loading,
    queryFn: async () =>{
    const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`, {
      headers:{
        authorization:`bearer ${token}`
      }
    })
    return res.json()
    },

  })
return [classes, refetch]



};

export default useMyClass;