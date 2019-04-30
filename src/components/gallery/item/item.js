import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, link, copy, image }) => (
  <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </figure>
  </Link>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default Item;
