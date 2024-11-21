import React from "react";

const CreatePost = () => {
  return (
    <div>
      <h1>Create Post</h1>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Content:
          <textarea name="content"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;