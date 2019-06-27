import React from 'react';

import Layout from 'components/layouts/layout';
import SEO from 'components/common/seo';
import ShippingInfo from 'components/pages/tracking/shipping-info';
import TrackingNav from 'components/pages/tracking/tracking-nav';
import TrackingImages from 'components/pages/tracking/tracking-images';
import TrackingActivities from 'components/pages/tracking/tracking-activities';

import './style.scss';

const Tracking = () => (
  <Layout hasFooter={false}>
    <SEO title="Chup hinh the" />
    <main className="tracking__page steenify__page transition-fade">
      <div className="tracking__container">
        <h1 className="tracking__title">Order Tracking</h1>
        <ShippingInfo />
        <TrackingNav />
        <TrackingImages />
        <TrackingActivities />
      </div>
    </main>
  </Layout>
);

export default Tracking;
