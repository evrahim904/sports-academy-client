

const Instructor = ({ instructor }) => {
    const { name, image, email } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>

                {/* 
                <p>class taken: {numberOfClassesTaken}</p>
                <p>class name:{classesTaken[0]} <br /> {classesTaken[1]} <br /> {classesTaken[2]}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">see classes</button>
                </div> */}
            </div>
        </div>
    );
};

export default Instructor;