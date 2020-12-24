import { Link } from 'gatsby';
import React from 'react';
import {format} from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function PostItem({ post: {date, title, slug, description} }) {
    const formattedDate = format(new Date(date), 'EEEE, LLLL d, yyyy');
    const descriptionAsJSON = JSON.parse(description.raw);
    return (
        <div className="px-4 py-4 sm:px-6 mb-6 transition duration-500 ease-in-out hover:bg-violet-50 rounded-lg">
            <Link to={`/${slug}`}>
                <p className="text-sm text-black text-opacity-40 font-mono">
                    <time dateTime={date}>
                        {formattedDate}
                    </time>
                </p>
                <h2 className="font-sans font-bold text-2xl">
                    {title}
                </h2>
                <p className="font-serif text-gray-700 text-base  mt-2.5">
                    <div>
                        {documentToReactComponents(descriptionAsJSON)}
                    </div>
                </p>
            </Link>
        </div>
    );
};