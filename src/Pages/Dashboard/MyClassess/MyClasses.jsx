
import useAuth from "../../../Hooks/useAuth";
import useMyClass from "../../../Hooks/useMyClass";

const MyClasses = () => {
  const { user } = useAuth()
  const [classes, refetch] = useMyClass()
  return (
    <div className="w-full px-8">
      <h3 className="uppercase text-center text-orange-500 mb-8">my classes: {classes.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>image</th>
              <th>name</th>
              <th>available seats</th>
              <th>price</th>
              <th>status</th>
              <th>Total Enrolled <br /> Students</th>
              <th>feedback</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {  classes.map((cls ,index )=> <tr key={cls._id}>
              <th>
               {index+1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {cls.name}
              </td>
              <td>{cls.availableSeats}</td>
              <td>${cls.price}</td>
              <td>{cls.status}</td>
              <td>0</td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs">update</button>
              </th>
            </tr> )}
            

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyClasses;