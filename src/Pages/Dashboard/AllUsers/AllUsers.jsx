import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery(['users'], async ()=>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://sports-academy-server-evrahim904.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user=>{
      fetch(`https://sports-academy-server-evrahim904.vercel.app/users/instructor/${user._id}`,{
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is now instructor`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }
    return (
        <div className="w-full">
            <h2 className="text-center mb-8">All users list:{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>photo</th>
        <th>name</th>
        <th>role</th>
        <th className="ps-20">action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index )=> <tr key={user._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.image}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {user.name}
        </td>
        <td>{user.role}</td>

        <td>
        <div className="flex items-center space-x-3">
            
          <button onClick={()=>handleMakeAdmin(user)} disabled = {user.role === 'admin'} className="btn btn-ghost btn-xs me-2 bg-orange-400">Make Admin</button>
          <button onClick={()=>handleMakeInstructor(user)}  disabled = {user.role === 'admin'|| user.role === 'instructor'} className="btn btn-ghost btn-xs bg-orange-400">Make Instructor</button>
        
          </div>
        </td>
        
      </tr>)}
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;