import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

const HeroBanner = () => (
  <section className="home_hero">
    <div className="home_hero__content container-fluid">
      <h2 className="home_hero__title">Bạn mệt mỏi vì tìm kiếm nơi chụp hình thẻ?</h2>
      <p className="home_hero__sub">
        Đăng tải hình ảnh của bạn và mọi thứ để&nbsp;
        <span className="hashtag">#chuphinhthe</span>
        &nbsp;lo
      </p>
      <Link to="/under-construction" className="steenify_btn steenify_btn__main home_hero__btn">
        <svg aria-hidden="true" height={15} width={13} title="icon__uploads">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__uploads" />
        </svg>
        <span>Bắt đầu nào</span>
      </Link>
    </div>
    <svg
      className="home_hero__icon home_hero__icon__1"
      aria-hidden="true"
      width={200}
      height={253}
      title="icon__hero__1"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__hero__1" />
    </svg>
    <svg
      className="home_hero__icon home_hero__icon__2"
      aria-hidden="true"
      width={356}
      height={330}
      title="icon__hero__2"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__hero__2" />
    </svg>
  </section>
);
export default HeroBanner;
