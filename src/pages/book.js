import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Book = ({ data }) => (
  <Layout>
    <Head pageTitle={data.bookJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.bookJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Book.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Book;

export const query = graphql`
  query BookQuery {
    bookJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
