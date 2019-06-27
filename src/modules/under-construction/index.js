/* eslint-disable import/no-unresolved */
import React from 'react';
import Layout from 'components/layouts/layout';
import SEO from 'components/common/seo';

import UnderBg from 'src/assets/svgs/under_bg.svg';
import UnderBgLeft from 'src/assets/svgs/under_bg_left.svg';
import UnderBgRight from 'src/assets/svgs/under_bg_right.svg';
import './style.scss';

const UnderConstruction = () => (
  <Layout footerCustomClass="footer--no-bg">
    <SEO title="Under Construction" />
    <main className="page__under_construction under_construction">
      <UnderBgLeft className="under_construction__bg-left" />
      <div className="container">
        <div className="under_construction__content">
          <h3 className="under_construction__title">
            Trong Quá Trình
            <br />
            Xây Dựng
          </h3>
          <div className="under_construction__desc">
            <p className="">
              Quá trình Upload hình ảnh qua website đang trong quá trình xây dựng, bạn vui lòng quay
              lại sau !
            </p>
            <p>Bạn có thể liên hệ gửi hình cho chúng tôi qua</p>
          </div>
          <ul className="social">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/chuphinhthecom/"
                className="under_construction__btn under_construction__btn--facebook"
              >
                FACEBOOK
              </a>
            </li>
            <li>hoặc</li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalo.me/713190536219531117"
                className="under_construction__btn under_construction__btn--zalo"
              >
                ZALO 0933390320
              </a>
            </li>
          </ul>

          <UnderBg className="under_construction__bg" />
        </div>
      </div>
      <UnderBgRight className="under_construction__bg-right" />
    </main>
  </Layout>
);

export default UnderConstruction;
