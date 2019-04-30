import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Events = ({ data }) => (
  <Layout>
    <Head pageTitle={data.eventsJson.title} />
    <Box>
      <Img
        fluid={
          data.eventsJson.image
            ? data.eventsJson.image.childImageSharp.fluid
            : {}
        }
        alt=""
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.eventsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;

export const query = graphql`
  query EventsQuery {
    eventsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
