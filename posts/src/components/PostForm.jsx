import MyButton from "../ui/button/MyButton";
import MyInput from "../ui/input/MyInput";
import React, { useState } from "react";

const PostForm = ({ create, posts, setVisible }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      ...post,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Post title"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="Post description"
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MyButton style={{ marginRight: "5px" }} onClick={addNewPost}>
          Create
        </MyButton>
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Back
        </MyButton>
      </div>
    </form>
  );
};

export default PostForm;
