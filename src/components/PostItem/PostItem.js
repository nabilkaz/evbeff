import { Link } from 'gatsby';
import React from 'react';
import {format} from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function PostItem({ post: {date, title, slug, description} }) {
    const formattedDate = format(new Date(date), 'EEEE, LLLL d, yyyy');
    const descriptionAsJSON = JSON.parse(description.raw);
    return (
        <div className="px-4 py-4 sm:px-6">
            <p className="text-sm text-gray-400 font-mono">
                <time dateTime={date}>
                    {formattedDate}
                </time>
            </p>
            <h2 className="font-sans font-bold text-2xl">
                <Link to={`/${slug}`}>{title}</Link>
            </h2>
            <p className="font-serif text-gray-800 text-base">
                <div>
                    {documentToReactComponents(descriptionAsJSON)}
                </div>
            </p>
        </div>
    );
};