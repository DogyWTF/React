import "../App.css";
import MyButton from "../ui/button/MyButton";
import { Link } from "react-router-dom";

const PostItem = ({ post, removePost, isPostIdPage = false }) => {
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      {isPostIdPage ? (
        <Link className="myBtn" style={{ marginRight: "5px" }} to={`/posts`}>
          Back
        </Link>
      ) : (
        <div className="post__btns">
          <Link
            className="myBtn"
            style={{ marginRight: "5px" }}
            to={`/posts/${post.id}`}
          >
            Open
          </Link>
          <MyButton onClick={() => removePost(post)}>Delete</MyButton>
        </div>
      )}
    </div>
  );
};

export default PostItem;
