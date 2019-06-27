import React, { PureComponent } from 'react';
import './style.scss';

class TrackingActivities extends PureComponent {
  render() {
    return (
      <div className="tracking__activitys">
        <div className="tracking__activity tracking__activity__header">
          <div className="row">
            <div className="col-3">
              <div className="tracking__label">Date / Time</div>
            </div>
            <div className="col-9">
              <div className="tracking__value text-left">Activity</div>
            </div>
          </div>
        </div>

        <div className="tracking__activity active">
          <div className="row">
            <div className="col-3">
              <div className="tracking__label">19/05/2019 13:22</div>
            </div>
            <div className="col-9">
              <div className="tracking__value text-left">Order Recieved & Confirmed</div>
            </div>
          </div>
        </div>

        <div className="tracking__activity">
          <div className="row">
            <div className="col-3">
              <div className="tracking__label">19/05/2019 15:22</div>
            </div>
            <div className="col-9">
              <div className="tracking__value text-left">Order is Being Processed by Kieu Anh</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingActivities;
