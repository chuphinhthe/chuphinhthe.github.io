import React from 'react';
import Slider from 'react-slick';
import './style.scss';

const settings = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
      },
    },
  ],
};

const Reviews = ({ reviews }) => (
  <section className="home_review">
    <div className="home_review__content">
      <h2 className="home_review__title">Nhận xét từ khách hàng</h2>
      <Slider {...settings} className="home_review__list">
        {reviews.edges.map(review => (
          <div className="home_review__wrapper" key={review.node.id}>
            <div className="home_review__item">
              <div className="home_review__icon">
                <img src={review.node.img} alt="home_review__avt" />
              </div>
              <div className="home_review__content">
                <div className="home_review__name">{review.node.name}</div>
                <div className="home_review__des">{review.node.quote}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <svg
      className="home_review__path home_review__path__1"
      aria-hidden="true"
      width={300}
      height={320}
      title="icon__said"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__said" />
    </svg>
  </section>
);
Reviews.defaultProps = {
  reviews: {},
};
export default Reviews;
