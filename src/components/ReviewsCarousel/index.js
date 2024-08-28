import "./index.css";
import { useState } from "react";

const leftArrowImage =
  "https://assets.ccbp.in/frontend/react-js/left-arrow-img.png";
const rightArrowImage =
  "https://assets.ccbp.in/frontend/react-js/right-arrow-img.png ";

const ReviewsCarousel = (props) => {
  const { reviewsList } = props;
  const lengthOfReviews = reviewsList.length;
  //console.log(lengthOfReviews);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const { imgUrl, username, companyName, description } =
    reviewsList[activeReviewIndex];
  const onClickLeftArrow = () => {
    if (activeReviewIndex !== 0) {
      setActiveReviewIndex(activeReviewIndex - 1);
    }
  };
  const onClickRightArrow = () => {
    if (activeReviewIndex !== lengthOfReviews - 1) {
      setActiveReviewIndex(activeReviewIndex + 1);
    }
  };
  return (
    <>
      <div className="main-container">
        <div className="reviews-carousel">
          <h1 className="heading">Reviews</h1>
          <div className="carousel-container">
            <button onClick={onClickLeftArrow} type="button" className="button">
              <img alt="left arrow" className="image" src={leftArrowImage} />
            </button>
            <div className="user-details">
              <img alt="username" src={imgUrl} className="user-image" />
              <h1 className="user-name">{username}</h1>
              <p className="company">{companyName} </p>
              <p className="description">{description}</p>
            </div>
            <button
              onClick={onClickRightArrow}
              type="button"
              className="button"
            >
              <img alt="right arrow" className="image" src={rightArrowImage} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsCarousel;
