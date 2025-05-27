import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";
import React, { useState, createRef, useRef } from "react";
import "./PostList.css";

const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center", marginTop: "15px" }}>Posts not found!</h1>;
  } 
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => {
          return (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames='post'
            >
              <PostItem removePost={removePost} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
