import React from "react";
import {graphql } from "gatsby";
import Nav from "../components/Nav";
import PostItem from "../components/PostItem";

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
    <Nav />
    {posts.nodes.map(post => (
      <PostItem key={`post-${post.slug}`} post={post} />
    ))}
  </div>
);
