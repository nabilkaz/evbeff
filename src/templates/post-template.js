import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';

export const query = graphql`
    query ($slug: String!) {
        post: contentfulPost(children: {}, slug: {eq: $slug}) {
            id
            title
            content {
            raw
            }
            date(fromNow: true)
        }
    }
`

const postTemplate = ({data: {post}}) => (
    <Layout>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div>
            {documentToReactComponents(JSON.parse(post.content.raw))}
        </div>
    </Layout>
)

export default postTemplate;