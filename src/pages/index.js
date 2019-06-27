import { graphql } from 'gatsby';
import Home from 'modules/home';

export default Home;

export const query = graphql`
  query MyFilesQuery {
    allPriceJson {
      edges {
        node {
          id
          price
          sub
          title
          unit
        }
      }
    }
    allReviewJson {
      edges {
        node {
          id
          img
          name
          quote
        }
      }
    }
    allFaqJson {
      edges {
        node {
          id
          name
          des
        }
      }
    }
  }
`;
