/* eslint-disable no-new */
import React, { Component } from 'react';
// import SmoothScroll from 'smooth-scroll';
import Layout from 'components/layouts/layout';
import SEO from 'components/common/seo';
import HeroBanner from 'components/pages/home/herobanner';
import HomeWork from 'components/pages/home/homework';
import Examples from 'components/pages/home/examples';
import Prices from 'components/pages/home/prices';
import Reviews from 'components/pages/home/reviews';
import FaQs from 'components/pages/home/faq';
import NewsLetter from 'components/pages/home/newsletter';

import './style.scss';

class Home extends Component {
  componentDidMount() {
    // new SmoothScroll('a[href*="#"]');
  }

  render() {
    const { data } = this.props;
    const { allPriceJson, allFaqJson, allReviewJson } = data;
    return (
      <Layout>
        <SEO title="Chup hinh the" />
        <main className="home__page steenify__page transition-fade">
          <HeroBanner />
          <HomeWork />
          <Examples />
          <Prices prices={allPriceJson} />
          <Reviews reviews={allReviewJson} />
          <FaQs fags={allFaqJson} />
          <NewsLetter />
        </main>
      </Layout>
    );
  }
}

export default Home;
