import React from 'react';
import PostItem from '../PostItem'

export default ({ posts }) => (
    <div className="flex flex-col max-w-prose mx-auto justify-content">
      {posts.nodes
      .slice()
      .sort((a,b) => {
        let aDate = new Date(a.date);
        let bDate = new Date(b.date);
        return  bDate - aDate
      })
      .map(post => (
        <PostItem key={`post-${post.slug}`} post={post} />
      ))}
    </div>
  );