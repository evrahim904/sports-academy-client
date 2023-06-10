import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCarts";

const SelectedClass = () => {
    const [cart, refetch] = useCart()
    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div>
            <h2 className="uppercase text-orange-500 text-center mb-7">My selected classes: {cart.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>instructor</th>
        <th>available seats</th>
        <th>price</th>
        <th>payment</th>

        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index )=> 
            
      <tr key={item._id}>
      <th>
        {index + 1}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image}alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
          </div>
        </div>
      </td>
      <td>
        {item.instructorName}
      </td>
      <td>{item.availableSeats}</td>
      <td>
       ${item.price}
      </td>
      <td>
       <button>pay</button>
      </td>
      <th>
        <button onClick={()=> handleDelete (item)} className="btn btn-ghost btn-sm bg-red-600"> Delete </button>
      </th>
    </tr>
            )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SelectedClass;