import React from 'react';
import PostItem from '../PostItem'

export default ({ posts }) => (
    <div className="container mx-auto">
      {posts.nodes.map(post => (
        <PostItem key={`post-${post.slug}`} post={post} />
      ))}
    </div>
  );