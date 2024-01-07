import "./FeatureTutos.css";

// ASSETS
import profile from "../assets/images/profile.png";
import star from "../assets/images/star.svg";
import turkey from "../assets/images/turkey.svg";
import usa from "../assets/images/USA.svg";
import Spain from "../assets/images/Spain.svg";
import arrow from "../assets/images/arrow-left.svg";
import dots from "../assets/images/Dots.svg"

function FeatureTutors() {
	return (
		<section className="feature-section">
            <div className="info">
				<h1>با اساتید مورد تایید لرنیا آشنا شوید</h1>
				<p>
					اساتید مورد تایید لرنیا ، با بررسی کامل و دریافت بازخورد از
					دانش آموزان به شما معرفی خواهند شد تا تجربه آموزش بهتر،
					همراه با آرامش خاطر را داشته باشید.
				</p>
                <div>
                    <button>جستجوی بهترین اساتید
                            <img src={arrow} />
                    </button>
                </div>
			</div>
			<div className="slider">
				<div className="slide">
					<div className="slide-header">
						<div className="header-details">
							<div className="slide-info">
								<div className="slide-img">
									<img src={profile} />
								</div>
								<div>
									<h3>گیلدا ناصری</h3>
									<p>زبان - انگلیسی</p>
									<div>
										<span>
											96 نظر (4.6)
											<img src={star} />
										</span>
									</div>
								</div>
							</div>
							<div className="slide-flag">
								<img src={turkey} />
							</div>
						</div>
						<p>
							من متوجه پیشرفت قابل توجهی در نحوه یادگیری زبان
							انگلیسی شده ام. من حتی قبلاً چند مصاحبه به زبان
							انگلیسی داشته ام، چیزی که چند ماه پیش امکان پذیر
							نبود اما الان به راحتی مسلط هستم به زبان انگلیسی و
							قطعا در ادامه برای سطح بالا تر خود پیشرفت خواهم
							کرد....
						</p>
					</div>
				</div>
				<div className="slide">
					<div className="slide-header">
						<div className="header-details">
							<div className="slide-info">
								<div className="slide-img">
									<img src={profile} />
								</div>
								<div>
									<h3>گیلدا ناصری</h3>
									<p>زبان - انگلیسی</p>
									<div>
										<span>
											96 نظر (4.6)
											<img src={star} />
										</span>
									</div>
								</div>
							</div>
							<div className="slide-flag">
								<img src={usa} />
							</div>
						</div>
						<p>
							من متوجه پیشرفت قابل توجهی در نحوه یادگیری زبان
							انگلیسی شده ام. من حتی قبلاً چند مصاحبه به زبان
							انگلیسی داشته ام، چیزی که چند ماه پیش امکان پذیر
							نبود اما الان به راحتی مسلط هستم به زبان انگلیسی و
							قطعا در ادامه برای سطح بالا تر خود پیشرفت خواهم
							کرد....
						</p>
						<div className="slide-button">
							<button>
								مشاهده کلاس ها
								<img src={arrow} />
							</button>
						</div>
					</div>
				</div>
				<div className="slide">
					<div className="slide-header">
						<div className="header-details">
							<div className="slide-info">
								<div className="slide-img">
									<img src={profile} />
								</div>
								<div>
									<h3>گیلدا ناصری</h3>
									<p>زبان - انگلیسی</p>
									<div>
										<span>
											96 نظر (4.6)
											<img src={star} />
										</span>
									</div>
								</div>
							</div>
							<div className="slide-flag">
								<img src={Spain} />
							</div>
						</div>
						<p>
							من متوجه پیشرفت قابل توجهی در نحوه یادگیری زبان
							انگلیسی شده ام. من حتی قبلاً چند مصاحبه به زبان
							انگلیسی داشته ام، چیزی که چند ماه پیش امکان پذیر
							نبود اما الان به راحتی مسلط هستم به زبان انگلیسی و
							قطعا در ادامه برای سطح بالا تر خود پیشرفت خواهم
							کرد....
						</p>
						</div>
				</div>
			</div>
            <div className="feature-background">
                <div className="background-dots">
                    <img src={dots}/>
                </div>
                <div className="circle"></div>
            </div>
		</section>
	);
}

export default FeatureTutors;
