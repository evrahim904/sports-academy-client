import { useEffect, useState } from "react";
import Class from "./Class";


const PopularClasses = () => {
    const [classes , setClasses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>{
            const popularClass = data.filter(p => p.status === 'approved')
            const limitedClasses = popularClass.slice(0, 6);
            setClasses(limitedClasses)
        })
    },[])
    return (
        <div>
            <h2 className="uppercase text-3xl text-center font-semibold text-green-500">popular classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 max-w-screen-xl">
            {
                classes.map(popular =>
                    
                    <Class
                    key={popular._id}
                    popular = {popular}
                    ></Class>)
             }
            </div>
        </div>
    );
};

export default PopularClasses;