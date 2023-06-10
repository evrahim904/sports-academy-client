import { useEffect, useState } from "react";
import Popular from "./Popular";

const PopularInstructor = () => {
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            const instructor = data.filter(p => p.category === 'popular')
            setPopular(instructor)
        })
    },[])
    return (
        <div>
        <h2 className="uppercase text-3xl text-center font-semibold mt-7 mb-5">popular Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {
            popular.map(pop => <Popular
            key={pop._id}
            pop = {pop}
            
            ></Popular>)
         }
        </div>
    </div>
    );
};

export default PopularInstructor;