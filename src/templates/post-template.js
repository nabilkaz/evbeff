import React from 'react';
import { graphql, Link } from 'gatsby';
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import {format} from 'date-fns';

export const query = graphql`
    query ($slug: String!) {
        post: contentfulPost(children: {}, slug: {eq: $slug}) {
            content {
                references {
                  file {
                    fileName
                    url
                  }
                  contentful_id
                }
                raw
              }
              date
              title
              id
            }
          }          
`

const postTemplate = ({data: {post: {date, title, content}}}) => {
    const formattedDate = format(new Date(date), 'EEEE, LLLL d, yyyy');
    const contentAsJSON = JSON.parse(content.raw);
    const imgReferences = content.references

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                const currentImgId = node.data.target.sys.id;
                const img = imgReferences.find(
                    (imgObj) => imgObj.contentful_id === currentImgId
                    )
                    .file

                return <img className="mx-auto" src={img.url} alt={img.fileName}/>
            },
        }
    }

    return (
    <Layout>
        <div className="px-4 py-14 sm:px-6">
            <p className="text-sm text-black text-opacity-40 pb-2 font-mono">
                <time dateTime={date}>
                    {formattedDate}
                </time>
            </p>
            <h1 className="font-sans font-bold text-5xl pb-7">{title}</h1>
            <div className="font-serif prose-xl prose">
                {documentToReactComponents(contentAsJSON, options)
                }
            </div>
            <div>
                <Link to="/">
                    <p className="text-black text-opacity-50 max-w-screen-sm mx-auto text-center items-center text-xl mt-10 transition duration-500 ease-in-out hover:bg-violet-50 rounded-lg py-4">
                        back
                    </p>
                </Link>
            </div>
        </div>
    </Layout>
)}

export default postTemplate;