import Courses from "../Components/Courses";
import FeatureTutors from "../Components/FeatureTutors";
import "./HomePage.css"

function HomePage() {
    return ( 
        <div className="homepage">
            <Courses/>
            <FeatureTutors/>
        </div>
     );
}

export default HomePage;