import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
    <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div>
            {documentToReactComponents(JSON.parse(post.content.raw))}
        </div>
    </div>
)

export default postTemplate;