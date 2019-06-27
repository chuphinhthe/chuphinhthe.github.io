/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

const NewsLetters = () => (
  <section className="home_news">
    <div className="home_news__content">
      <div className="row">
        <div className="col-md-7">
          <h2 className="home_news__title">
            Thắc mắc khác
            <br />
            Gửi ngay câu hỏi cho &nbsp;
            <span className="hashtag">#chuphinhthe</span>
          </h2>
        </div>
        <div className="col-md-5">
          <div className="home_news__form">
            <div className="home_news__group">
              <label htmlFor="home_news_name" className="home_news__label sr-only">
                Tên
              </label>
              <input
                placeholder="Tên"
                id="home_news_name"
                type="text"
                className="form-control home_news__contol"
              />
            </div>
            <div className="home_news__group">
              <label htmlFor="home_news_phone" className="home_news__label sr-only">
                Số điện thoại
              </label>
              <input
                placeholder="Số điện thoại"
                id="home_news_phone"
                type="text"
                className="form-control home_news__contol"
              />
            </div>
            <div className="home_news__group">
              <label htmlFor="home_news_message" className="home_news__label sr-only">
                Câu hỏi của bạn?
              </label>
              <input
                placeholder="Câu hỏi của bạn?"
                id="home_news_message"
                type="text"
                className="form-control home_news__contol"
              />
            </div>
            <Link
              to="/under-construction"
              className="steenify_btn steenify_btn__white home_news__btn"
            >
              Gửi câu hỏi
            </Link>
          </div>
        </div>
      </div>
    </div>
    <svg
      className="home_news__path home_news__path__1"
      aria-hidden="true"
      width={250}
      height={350}
      title="icon__news"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__news" />
    </svg>
  </section>
);

export default NewsLetters;
