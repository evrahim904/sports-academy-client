import { useEffect, useState } from "react";

const Extra = () => {

const [all, setAll] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAll(data)
        })
    },[])
    return (
        <div>
            <h3>my data {all.length}</h3>
        </div>
    );
};

export default Extra;