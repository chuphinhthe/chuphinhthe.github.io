/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/assets/css/bootstrap.min.css';
import './src/assets/css/slick.css';
import './src/styles/index.scss';

import WrappedProvider from 'store/WrappedProvider';

export const wrapRootElement = WrappedProvider;
