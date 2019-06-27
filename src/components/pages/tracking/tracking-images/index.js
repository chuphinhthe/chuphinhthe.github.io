import React, { PureComponent } from 'react';
import InputImage from 'src/assets/images/tracking_input.jpg';
import OutputAvatar from 'src/assets/images/tracking_output.jpg';
import './style.scss';

class TrackingImages extends PureComponent {
  render() {
    return (
      <div className="tracking__images">
        <div className="row">
          <div className="col-6">
            <div className="tracking__name">Input</div>
            <div className="tracking__img">
              <img src={InputImage} alt="tracking__input" />
            </div>
          </div>
          <div className="col-6">
            <div className="tracking__name">Output</div>
            <div className="tracking__img">
              <img src={OutputAvatar} alt="tracking__input" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingImages;
