import React from 'react';
import { graphql } from 'gatsby';
import RichText from './RichText';

const NewsItem = ({ data, images, files }) => (
  <article key={data._id}>
    <h1>{data.title}</h1>
    <p>
      <small>
        Published on <em>{data.created}</em>
      </small>
    </p>
    {data.description ? (
      <p>
        <strong>{data.description}</strong>
      </p>
    ) : null}
    <RichText serialized={data.text.react} images={images} files={files} />
  </article>
);

export default NewsItem;

export const query = graphql`
  fragment NewsItem on PloneNewsItem {
    id
    title
    description
    created(formatString: "MMMM Do, YYYY")
    text {
      react
    }
    _path
  }
`;
