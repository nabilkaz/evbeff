import React from "react";
import {graphql } from "gatsby";
import PostItemList from "../components/PostItemList/PostItemList";
import Layout from '../components/Layout';

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
  <Layout>
    <PostItemList posts={posts}/>
    <p className="max-w-screen-sm mx-auto text-center"><span role="img" aria-label="pizza kiss">🍕💋</span></p>
  </Layout>
);
