import Extra from "../../../Components/Extra";
import PopularInstructor from "../../../PopularInstrucor/PopularInstructor";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Extra></Extra>
        </div>
    );
};

export default Home;