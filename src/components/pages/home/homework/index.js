import React from 'react';
import WorkStep1 from 'src/assets/svgs/work_step_1.svg';
import WorkStep2 from 'src/assets/svgs/work_step_2.svg';
import WorkStep3 from 'src/assets/svgs/work_step_3.svg';

import './style.scss';

const HomeWork = () => (
  <section className="home_work">
    <div className="container">
      {/* <h2 className="home_work__title">How Do We Work?</h2> */}
      <h2 className="home_work__title">Chỉ với 3 bước đơn giản</h2>
      <div className="row no-gutters">
        <div className="col-md-4">
          <div className="home_work__item">
            <div className="home_work__icon home_work__upload">
              <WorkStep1 />
              <svg
                className="home_work__path"
                aria-hidden="true"
                height={13}
                width={64}
                title="work_path_1"
              >
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#work_path_1" />
              </svg>
            </div>
            <div className="home_work__step">01</div>
            <div className="home_work__name">Đăng tải hình ảnh</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="home_work__item">
            <div className="home_work__icon">
              <WorkStep2 />
              <svg
                className="home_work__path"
                aria-hidden="true"
                height={13}
                width={64}
                title="work_path_2"
              >
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#work_path_2" />
              </svg>
            </div>
            <div className="home_work__step">02</div>
            <div className="home_work__name">Xử lý phông nền và làm đẹp</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="home_work__item">
            <div className="home_work__icon">
              <WorkStep3 />
            </div>
            <div className="home_work__step">03</div>
            <div className="home_work__name">Nhận hàng</div>
          </div>
        </div>
      </div>
    </div>
    <svg
      className="home_work__ani home_work__ani__1"
      aria-hidden="true"
      width={250}
      height={400}
      title="icon__work"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__work" />
    </svg>
  </section>
);
export default HomeWork;
