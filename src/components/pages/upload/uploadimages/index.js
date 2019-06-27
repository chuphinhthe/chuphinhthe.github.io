import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateStep } from 'modules/upload/action';

import DropBox from '../dropbox';
import Review from '../review';

class UploadImages extends Component {
  state = {};

  render() {
    const { file, updateStepAction } = this.props;

    return (
      <div className="checkout__step checkout__step__1">
        {!file.length ? <DropBox /> : <Review />}
        <div className="text-right pt-3 pb-4 pr-4 pt-md-0 pb-md-5 pr-md-5">
          <button
            type="button"
            disabled={!file.length}
            onClick={() => updateStepAction('settup')}
            className="checkout_navgation checkout_navgation__next steenify_btn steenify_btn__main"
          >
            GO TO NEXT STEP
          </button>
        </div>
      </div>
    );
  }
}

UploadImages.defaultProps = {
  file: [],
  updateStepAction: () => {},
};

const mapStateToProps = ({ upload }) => ({
  file: upload.data.listFile,
});

const mapDispatchToProps = {
  updateStepAction: updateStep,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadImages);
