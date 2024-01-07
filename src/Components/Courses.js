import "./Courses.css"

// Assets
import brain from "../assets/images/brain.svg"
import javascript from "../assets/images/java-script.svg"
import language from "../assets/images/language.svg"
import dots from "../assets/images/Dots.svg"


function Courses() {
    return ( 
    <>
        <div className="courses">
            <div className="course-item">
                <div className="course-image">
                    <img src={javascript} alt="logo"/>
                </div>
                <div className="course-title">
                    <h5>آموزش برنامه نویسی</h5>
                </div>
            </div>

            <div className="course-item">
                <div className="course-image">
                    <img src={brain} alt="logo"/>
                </div>
                <div className="course-title">
                    <h5>مشاوره</h5>
                </div>
            </div>
            
            <div className="course-item">
                <div className="course-image">
                    <img src={language} alt="logo"/>
                </div>
                <div className="course-title">
                    <h5>آموزش زبان</h5>
                </div>
            </div>
        </div>
        <div className="course-details">
            <p>زبان انگلیسی</p>
            <p>زبان عربی</p>
            <p>زبان آلمانی</p>
            <p>زبان ایتالیایی</p>
            <p>زبان کره ای</p>
            <p>زبان چینی</p>
            <p>زبان فرانسه</p>
            <p>زبان اسپانیایی</p>
            <p>زبان کره ای</p>
            <p>زبان چینی</p>
            <p>زبان فرانسه</p>
            <p>زبان اسپانیایی</p>
        </div>
        <div className="dots">
            <img src={dots} />
        </div>
    </>
     );
}

export default Courses;