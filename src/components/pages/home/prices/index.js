import React from 'react';
import { Link } from 'gatsby';
import { formatNumber } from 'utils';
import './style.scss';

const Prices = ({ prices }) => (
  <section className="home_price">
    <div className="container">
      <h2 className="home_price__title">Chi phí</h2>
      <p className="home_price__sub">
        <span className="hashtag">#chuphinhthe</span>
          &nbsp;sẽ hoàn lại tiền nếu bạn không hài lòng với hình ảnh nhận được.
      </p>
      <div className="row">
        {prices.edges.map(price => (
          <div className="col-xl-3 col-md-6" key={price.node.id}>
            <div className="home_price__item">
              <div className="home_price__top">
                <div className="home_price__name">{price.node.title}</div>
                <div className="home_price__des">{price.node.sub}</div>
              </div>
              <div className="home_price__divice" />
              <div className="home_price__bottom">
                <div className="home_price__number">
                  {formatNumber(price.node.price)}
                  <span>{price.node.unit}</span>
                </div>
              </div>
              <Link
                to="/under-construction"
                className="steenify_btn steenify_btn__main home_price__btn"
              >
                  START
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <svg
      className="home_price__path home_price__path__1"
      aria-hidden="true"
      width={129}
      height={74}
      title="icon__pricing"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__pricing" />
    </svg>
  </section>
);
Prices.defaultProps = {
  prices: {},
};
export default Prices;
