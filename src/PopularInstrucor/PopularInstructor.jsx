import { useEffect, useState } from "react";
import Popular from "./Popular";

const PopularInstructor = () => {
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        fetch('https://sports-academy-server-evrahim904.vercel.app/instructors')
        .then(res => res.json())
        .then(data =>{
            const instructor = data.filter(p => p.role === 'instructor')
            const limitedClasses = instructor.slice(0, 6);
            setPopular(limitedClasses)
        })
    },[])
    return (
        <div>
        <h2 className="uppercase text-3xl text-center font-semibold mt-7 mb-5 text-blue-500">popular Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 max-w-screen-xl">
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