import React from 'react';

const Subreddit = ({ name, posts }) => {
    return (
        <div className="subreddit">
            <h2>{name}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <span>{post.upvotes} Upvotes</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Subreddit;