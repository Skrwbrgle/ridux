import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPublis } from "../../actions/PostsAction";
import AtributeTabel from "../AtributeTabel";

function PublisPosts() {
  const { getListPublisResult, getListPublisLoading, getListsPublisError } =
    useSelector((state) => state.PostsReducer);
  const publisPosts = getListPublisResult.posts;
  const dispacth = useDispatch();

  useEffect(() => {
    //call action getListPosts
    console.log(`1. use effect component did mount`);
    dispacth(getListPublis());
  }, [dispacth]);

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
              onclick="popuphandler(true)"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Post
              </p>
            </button>
          </div>
          <div className="mt-7 overflow-x-auto">
            {publisPosts ? (
              publisPosts.map((post) => <AtributeTabel data={post} />)
            ) : getListPublisLoading ? (
              <p>loading . . .</p>
            ) : (
              <p>{getListsPublisError ? getListsPublisError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisPosts;
