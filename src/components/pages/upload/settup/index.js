import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStep } from 'modules/upload/action';
import { getGrandTotalPrice, formatNumber } from 'utils';
import Photo from './photo';
import './style.scss';

class Settup extends Component {
  renderPhotos = () => {
    const { files } = this.props;
    return files.map((item, index) => (
      <Photo index={index} key={`checkout_settup__item_${index.toString()}`} />
    ));
  };

  render() {
    const { files, updateStepAction } = this.props;
    return (
      <div className="checkout__step checkout__step__2">
        <div className="checkout_settup">
          <div className="checkout_settup__content">
            <h2 className="checkout_settup__title">Setup Your Photos</h2>
            <div className="checkout_settup__list">{this.renderPhotos()}</div>
          </div>

          <div className="checkout_settup__footer">
            <div className="row">
              <div className="col-md-6">
                <div className="checkout_settup__grand">
                  <span>GRAND TOTAL</span>
                  <strong>
                    <span>{formatNumber(getGrandTotalPrice(files))}</span>
                    <small>VND</small>
                  </strong>
                </div>
              </div>

              <div className="col-md-6">
                <div className="checkout_settup__navigations text-right">
                  <button
                    className="checkout_navgation checkout_navgation__prev steenify_btn steenify_btn__secondary mr-3 pr-5 pl-5"
                    type="button"
                    onClick={() => updateStepAction('upload')}
                  >
                    GO BACK
                  </button>
                  <button
                    className="checkout_navgation checkout_navgation__next steenify_btn steenify_btn__main pr-5 pl-5"
                    type="button"
                    onClick={() => updateStepAction('payment')}
                    disabled={!files.length}
                  >
                    NEXT: Fill Shipping Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Settup.defaultProps = {
  files: [],
};

const mapStateToProps = ({ upload }) => ({
  files: upload.data.listFile,
});

const mapDispatchToProps = {
  updateStepAction: updateStep,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settup);
