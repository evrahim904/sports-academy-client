

const Instructor = ({ instructor }) => {
    const { name, image, email } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>

               
            </div>
        </div>
    );
};

export default Instructor;