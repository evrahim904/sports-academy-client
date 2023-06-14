

const Class = ({ popular }) => {
  const { image, name, instructorName, availableSeats, price } = popular;
  return (
    <div className="bg-gray-100 shadow-xl rounded-lg overflow-hidden">
      <img src={image} alt="Class" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <h2 className="text-lg text-gray-600 mb-2">Instructor: {instructorName}</h2>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="bg-blue-500 text-white font-semibold px-2 py-1 rounded mr-2">
              Seats: {availableSeats}
            </div>
            <div className="bg-green-500 text-white font-semibold px-2 py-1 rounded">
              Price: ${price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;