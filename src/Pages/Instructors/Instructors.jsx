import { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ms-28 gap-4">
            {
                instructors.map(instructor =>
                    <Instructor
                    key={instructor._id}
                    instructor = {instructor}
                    ></Instructor>
                    )
            }
        </div>
    );
};

export default Instructors;