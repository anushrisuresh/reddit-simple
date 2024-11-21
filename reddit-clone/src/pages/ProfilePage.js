import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Username:</strong> sample_user</p>
      <h2>Subscribed Subreddits</h2>
      <ul>
        <li>r/React</li>
        <li>r/Programming</li>
      </ul>
      <h2>Upvoted Posts</h2>
      <ul>
        <li>Post 1: Sample post title</li>
        <li>Post 2: Another sample post</li>
      </ul>
    </div>
  );
};

export default ProfilePage;