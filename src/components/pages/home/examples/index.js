import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './style.scss';

const Examples = () => (
  <section className="home_example">
    <div className="container">
      <h3 className="home_example__title">See Our Samples</h3>
      <div className="home_example__content">
        <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "home_example.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="home_example__content" />
          )}
        />
      </div>
    </div>
    <svg
      className="home_example__path home_example__path__1"
      aria-hidden="true"
      width={300}
      height={250}
      title="icon__sample"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__sample" />
    </svg>
  </section>
);
export default Examples;
