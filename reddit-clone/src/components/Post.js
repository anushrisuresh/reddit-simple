import React, { useState } from 'react';

const Post = ({ post }) => {
    const [upvotes, setUpvotes] = useState(post.upvotes);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleUpvote}>Upvote ({upvotes})</button>
        </div>
    );
};

export default Post;