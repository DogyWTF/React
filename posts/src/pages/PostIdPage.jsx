import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Loader from "../ui/Loader/Loader";
import PostService from "../API/PostService";
import PostItem from "../components/PostItem";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([
    {
      body: "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus",
      email: "Noemie@marques.me",
      id: 21,
      name: "aliquid rerum mollitia qui a consectetur eum sed",
      postId: 5,
    },
  ]);

  const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComents, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostsById(params.id);
    fetchComents(params.id);
  }, []);

  return (
    <div style={{ width: "800px", marginTop: "20px" }}>
      <h1 style={{ textAlign: "center" }}>{post.title}</h1>

      {isLoading ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "100px 0",
            }}
          >
            <Loader />
          </div>
          <hr style={{ margin: "15px 0", border: "1px solid teal" }} />
        </div>
      ) : (
        <PostItem post={post} setPost={setPost} isPostIdPage={true} />
      )}
      <h2 style={{ marginTop: "15px" }}>Comments</h2>
      {isComLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "100px 0",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: "15px" }}>
              <hr style={{ margin: "15px 0", border: "1px solid teal" }} />
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
          <hr style={{ margin: "15px 0", border: "1px solid teal" }} />
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
