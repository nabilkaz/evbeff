import React from "react";
import {graphql, Link } from "gatsby";
import TopNav from "../components/header";

export const query = graphql`
query {
  posts: allContentfulPost {
    nodes {
      title
      description {
        raw
      }
      content {
        raw
      }
      date
      slug
    }
  }
}`;

export default ({data: {posts}}) => (
  <div>
    <TopNav />
    <h1>Evbeff's blog</h1>
    {posts.nodes.map(post => (
      <div key={`post-${post.slug}`}>
        <h1>
          <Link to={`/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
      </div>
    ))}
  </div>
);
