import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addFiles, deletePhoto } from 'modules/upload/action';

import './style.scss';

class Review extends PureComponent {
  handleRemove = (index) => {
    const { deletePhotoAction } = this.props;
    deletePhotoAction(index);
  };

  handleChangeFiles = (e) => {
    e.preventDefault();
    const { addFilesAction } = this.props;
    addFilesAction(e.target.files);
  };

  renderUploadedImages = () => {
    const { files } = this.props;
    return files.map((file, index) => (
      <div
        key={`checkout_preview__item_${index.toString()}`}
        className="col-lg-5th col-md-3 col-sm-4 col-6"
      >
        <div className="checkout_preview__wrapper">
          <div className="checkout_preview__item">
            <img src={file.url} alt="home_example" />
            <button
              className="checkout_preview__remove"
              type="button"
              onClick={() => this.handleRemove(index)}
            >
              <svg aria-hidden="true" title="icon__close" width={18} height={19}>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="checkout_preview">
        <div className="checkout_preview__content">
          <h1 className="checkout_preview__title">Uploaded Photos</h1>
          <div className="checkout_preview__list">
            <div className="row no-gutters">
              {this.renderUploadedImages()}
              <div className="col-lg-5th col-md-3 col-sm-4 col-6">
                <div className="checkout_preview__wrapper">
                  <label htmlFor="files" className="d-block">
                    <input
                      type="file"
                      name="files[]"
                      id="files"
                      multiple
                      accept="image/*"
                      onChange={this.handleChangeFiles}
                      className="sr-only checkout_dropbox__input"
                    />
                    <div className="checkout_preview__loadmore">
                      <svg aria-hidden="true" title="icon__plus" width={23} height={23}>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__plus" />
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Review.defaultProps = {
  file: [],
};
const mapStateToProps = ({ upload }) => ({
  files: upload.data.listFile,
});

const mapDispatchToProps = {
  addFilesAction: addFiles,
  deletePhotoAction: deletePhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Review);
