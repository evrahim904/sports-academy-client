
const MyClasses = () => {
    return (
        <div className="w-full px-8">
            <h3 className="uppercase text-center text-orange-500 mb-8">my classes:</h3>
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
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyClasses;