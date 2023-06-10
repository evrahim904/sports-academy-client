import { useEffect, useState } from "react";
import AllClasses from "./AllClasses";


const Classes = () => {
    const [classes , setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)
        })
    },[])
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 ms-28 gap-4">
        {
            classes.map(cls => <AllClasses
            key={cls._id}
          allClass = {cls}
            
            ></AllClasses>)
        }
       </div>
    );
};

export default Classes;