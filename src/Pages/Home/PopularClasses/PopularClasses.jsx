import { useEffect, useState } from "react";
import Class from "./Class";


const PopularClasses = () => {
    const [classes , setClasses] = useState([])

    useEffect(()=>{
        fetch('https://sports-academy-server-evrahim904.vercel.app/classes')
        .then(res => res.json())
        .then(data =>{
            const popularClass = data.filter(p => p.category === 'popular')
            setClasses(popularClass)
        })
    },[])
    return (
        <div>
            <h2 className="uppercase text-3xl text-center font-semibold">popular classes</h2>
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