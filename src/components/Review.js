import React from "react";

function Review() {
  return (
    <div>
      <section className="reviews">
        <div className="middle-desc">
          <span className="review-title">Customer Reviews</span>
          <img src={require("../images/Rating.png")} alt="" />
          <span>Share your thoughts with other customers</span>
          <button>WRITE A REVIEW</button>
          <span>Top Customers Reviews</span>
          <img src={require("../images/Rating.png")} alt="" />
          <span>By Customer Name on February 18, 2017</span>
          <span>
            Millions of Americans turn to Lasik Surgery when their vision is
            less than perfect and they’re tired of being tied down to wearing
            glasses or contacts. What part of the eye is it that may be causing
            all your vision trouble? Your cornea! When the shape of your cornea
            is irregular, the image on your retina is blurry and out-of-focus.
            The cornea is a part of your eye that works to focus light and
            projects an image on the retina. This focusing of light is called
            refraction. The 3 main types of refractive errors are myopia
            (nearsightedness), hyperopia (farsightedness) and astigmatism.{" "}
          </span>
          <span>Show more reviews</span>
        </div>
      </section>
    </div>
  );
}

export default Review;
