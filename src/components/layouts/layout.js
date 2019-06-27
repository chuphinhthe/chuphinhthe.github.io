/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import SVG from '../common/svg';

const Layout = ({ children, hasFooter, footerCustomClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        {hasFooter && <Footer className={footerCustomClass || ''} />}
        <SVG />
      </Fragment>
    )}
  />
);

Layout.defaultProps = {
  hasFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool,
};

export default Layout;
