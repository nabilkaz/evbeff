import React from 'react';
import PostItem from '../PostItem'

export default ({ posts }) => (
    <div className="flex flex-col max-w-prose mx-auto justify-content">
      {posts.nodes.map(post => (
        <PostItem key={`post-${post.slug}`} post={post} />
      ))}
    </div>
  );