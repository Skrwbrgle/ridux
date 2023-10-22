import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPosts } from "../../actions/PostsAction";
import PostCard from "../PostCard";
import Loading from "../Loading";

function ListPosts() {
  const { getListPostsResult, getListPostsLoading, getListsPostsError } =
    useSelector((state) => state.PostsReducer);
  const dispacth = useDispatch();

  useEffect(() => {
    //call action getListPosts
    console.log(`1. use effect component did mount`);
    dispacth(getListPosts());
  }, [dispacth]);

  return (
    <div>
      {getListPostsResult ? (
        getListPostsResult
          .filter((v) => v.status === "1")
          .map((post) => <PostCard data={post} />)
      ) : getListPostsLoading ? (
        <Loading />
      ) : (
        <p>{getListsPostsError ? getListsPostsError : "Data Empyt"}</p>
      )}
    </div>
  );
}

export default ListPosts;
