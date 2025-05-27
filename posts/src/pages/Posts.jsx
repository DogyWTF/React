import React, { useMemo, useState, createRef, useEffect, useRef } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../ui/modal/MyModal";
import MyButton from "../ui/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import "../App.css";
import PostService from "../API/PostService";
import Loader from "../ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../ui/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../ui/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <MyButton style={{ marginTop: "15px" }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm setVisible={setModal} posts={posts} create={createPost} />
      </MyModal>
      <PostFilter
        limit={limit}
        setLimit={setLimit}
        filter={filter}
        setFilter={setFilter}
      />

      {postError && <h1>{postError}</h1>}
      <hr style={{ margin: "15px 0", border: "1px solid teal" }} />
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title={"Post list JS"}
      />
      <div ref={lastElement} />
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 900px 0",
          }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
