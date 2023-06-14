import { useEffect, useState } from "react";

const Extra = () => {
  const [extra, setExtra] = useState([]);

  useEffect(() => {
    fetch('extra.json')
      .then(res => res.json())
      .then(data => {
        setExtra(data)
      })
  }, [])

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
   <div>
     <h3 className="uppercase mb-10 mt-8 text-3xl text-center text-purple-600">Training Ground Facilities</h3>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
     
      {extra.map(item => (
        <div key={item.id} className="rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 bg-gray-100">
          <div className="h-48" style={{ backgroundColor: generateRandomColor() }}>
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-600">{item.name}</h2>
            <p className="text-base text-gray-700 mt-2">Facilities: 
              <span className="text-green-600"> {item.facilities.join(", ")}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Extra;