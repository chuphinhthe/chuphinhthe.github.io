import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from 'components/layouts/layout';
import SEO from 'components/common/seo';
import StepBar from 'components/pages/upload/stepbar';
import UploadImages from 'components/pages/upload/uploadimages';
import Settup from 'components/pages/upload/settup';
import Payment from 'components/pages/upload/payment';

import './style.scss';

class Upload extends Component {
  renderContent = () => {
    const { step } = this.props;
    switch (step) {
      case 'upload':
        return <UploadImages />;
      case 'settup':
        return <Settup />;
      case 'payment':
        return <Payment />;
      default:
        return null;
    }
  };

  render() {
    return (
      <Layout>
        <SEO title="Uplpad | Chup hinh the" />
        <main className="checkout__page">
          <div className="container">
            <StepBar />
            <div className="checkout__content">{this.renderContent()}</div>
          </div>
        </main>
      </Layout>
    );
  }
}

const mapDispatchToProps = {};
const mapStateToProps = ({ upload }) => ({
  step: upload.ui.step,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Upload);
