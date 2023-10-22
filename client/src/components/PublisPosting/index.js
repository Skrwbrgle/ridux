import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  clearDetailPost,
  detailPost,
  editPost,
  getListPublis,
} from "../../actions/PostsAction";
import AtributeTabel from "../AtributeTabel";

function PublisPosts() {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const {
    getListPublisResult,
    getListPublisLoading,
    getListsPublisError,
    addPostResult,
    deletePostResult,
    publisPostResult,
    detailPostResult,
    editPostResult,
  } = useSelector((state) => state.PostsReducer);
  const publisPosts = getListPublisResult.posts;
  const dispatch = useDispatch();

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    if (id) {
      //update
      console.log("update");
      dispatch(
        editPost({ id: id, title: title, textBody: textBody, image: image })
      );
    } else {
      dispatch(addPost({ title: title, textPost: textBody, image: image }));
    }
  };

  useEffect(() => {
    if (deletePostResult) {
      dispatch(getListPublis());
    }
  }, [deletePostResult, dispatch]);

  useEffect(() => {
    if (publisPostResult) {
      dispatch(getListPublis());
    }
  }, [publisPostResult, dispatch]);

  useEffect(() => {
    dispatch(getListPublis());
  }, [dispatch]);

  useEffect(() => {
    if (addPostResult) {
      dispatch(getListPublis());
      setTitle("");
      setTextBody("");
      setImage("");
      modalHandler();
    }
  }, [addPostResult, dispatch]);

  useEffect(() => {
    if (editPostResult) {
      dispatch(getListPublis());
      setTitle("");
      setTextBody("");
      setImage("");
      modalHandler();
    }
  }, [editPostResult, dispatch]);

  useEffect(() => {
    if (detailPostResult) {
      setTitle(detailPostResult.title);
      setTextBody(detailPostResult.textPost);
      setImage(detailPostResult.image);
      setId(detailPostResult.id);
      modalHandler(true);
    } else {
      setTitle("");
      setTextBody("");
      setImage("");
      setId("");
      modalHandler(false);
    }
  }, [detailPostResult, dispatch]);

  function modalHandler(val) {
    let modal = document.getElementById("modal");
    if (val) {
      fadeIn(modal);
    } else {
      fadeOut(modal);
    }
  }
  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
  function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";
    (function fade() {
      let val = parseFloat(el.style.opacity);
      if (!((val += 0.2) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }
  return (
    <>
      <div className="sm:px-6 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabindex="0"
              className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Posts
            </p>
            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
              <p>Sort By:</p>
              <select
                aria-label="select"
                className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
              >
                <option className="text-sm text-indigo-800">Latest</option>
                <option className="text-sm text-indigo-800">Oldest</option>
                <option className="text-sm text-indigo-800">Latest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                href=" javascript:void(0)"
              >
                <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                  <p>All</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Publis</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
              >
                <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                  <p>Draft</p>
                </div>
              </a>
            </div>
            <button
              onClick={() => dispatch(detailPost({}))}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Post
              </p>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto">
            {publisPosts ? (
              publisPosts.map((post) => (
                <AtributeTabel key={post.id} data={post} />
              ))
            ) : getListPublisLoading ? (
              <p>loading . . .</p>
            ) : (
              <p>{getListsPublisError ? getListsPublisError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
      {/* MODAL ADD POST */}
      <dh-component>
        <div
          className="py-12 bg-gray-700 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 hidden"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-2xl"
          >
            <form
              onSubmit={(e) => handleSubmitPost(e)}
              className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-xl border border-gray-400"
            >
              <h1 className="text-gray-800 text-2xl font-bold tracking-normal leading-tight mb-4">
                What do you think?
              </h1>
              <label
                for="title"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Title
              </label>
              <input
                id="title"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Your's title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label
                for="textarea"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Body
              </label>
              <div className="relative mb-5 mt-2">
                <textarea
                  id="textarea"
                  spellcheck="false"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-60 flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                  placeholder="Describe everything about this post here"
                  value={textBody}
                  onChange={(e) => setTextBody(e.target.value)}
                />
              </div>

              <label
                for="image"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Image
              </label>
              <div className="relative mb-5 mt-2">
                <input
                  id="image"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-start w-full">
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  type="button"
                  onClick={() => dispatch(detailPost(false))}
                >
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={() => dispatch(detailPost(false))}
                aria-label="close modal"
                role="button"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </dh-component>
    </>
  );
}

export default PublisPosts;
