
const Popular = ({pop}) => {
    const {name, image,  numberOfClassesTaken, classesTaken } = pop;
    return (
        <div className="card w-96 max-h-80 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-blue-500">
          name: {name}
          </h2>
          
        </div>
      </div>
    );
};

export default Popular;