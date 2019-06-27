import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { checkoutSteps } from 'constants';

class StepBar extends Component {
  renderContent = () => {
    const { step } = this.props;
    const indexActive = checkoutSteps.findIndex(item => item.value === step);
    const listItems = checkoutSteps.map((item, index) => (
      <div
        className={index <= indexActive ? 'checkout_nav__step active' : 'checkout_nav__step'}
        key={item.value}
      >
        <div className="checkout_nav__step__inner">
          <svg className="icon" aria-hidden="true" width="8" height="6" title="icon__check">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__check" />
          </svg>
          <div className="checkout_nav__num">
            Step
            <span>{index}</span>
          </div>
          <div className="checkout_nav__text">{item.label}</div>
        </div>
        <svg className="arrow" aria-hidden="true" width="8" height="33" title="icon__arrow">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__arrow" />
        </svg>
      </div>
    ));

    return listItems;
  };

  render() {
    return (
      <nav className="checkout_nav">
        <div className="checkout_nav__content ">
          <div className="checkout_nav__steps">{this.renderContent()}</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ upload }) => ({
  step: upload.ui.step,
});

export default connect(mapStateToProps)(StepBar);
