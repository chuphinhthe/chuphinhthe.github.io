import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class FaQItem extends Component {
  constructor() {
    super();
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    const { title, children } = this.props;
    const { collapse } = this.state;
    return (
      <div className="home_faq__item">
        <div className="home_faq__header">
          <h4 className="mb-0">
            <button
              onClick={this.toggle}
              className={`btn btn-link home_faq__trigger steenify_btn steenify_btn__link collapsed ${collapse
                && 'collapsed__open'}`}
              type="button"
            >
              <span>{title}</span>
              <svg
                className="home_faq__icon"
                aria-hidden="true"
                height={20}
                width={20}
                title="icon__plus"
              >
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__plus" />
              </svg>
            </button>
          </h4>
        </div>

        <Collapse isOpen={collapse}>
          <div className="home_faq__body">{children}</div>
        </Collapse>
      </div>
    );
  }
}
FaQItem.defaultProps = {
  title: '',
};
export default FaQItem;
