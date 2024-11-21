import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="profile">
            <h2>{user.name}'s Profile</h2>
            <h3>Subscribed Subreddits:</h3>
            <ul>
                {user.subscribedSubreddits.map(sub => <li key={sub}>{sub}</li>)}
            </ul>
            <h3>Upvoted Posts:</h3>
            <ul>
                {user.upvotedPosts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
};

export default UserProfile;