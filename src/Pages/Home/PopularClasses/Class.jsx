
const Class = ({popular}) => {
    const {image,name,instructorName,availableSeats,price} = popular
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <h2>instructor: {instructorName}</h2>
          <div className="card-actions ">
            <div className="badge badge-outline font-semibold">seats:{availableSeats}</div> 
            <div className="badge badge-outline font-semibold">${price}</div>
          </div>
        </div>
      </div>
    );
};

export default Class;