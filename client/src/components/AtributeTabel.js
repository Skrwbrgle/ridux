import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  publisPost,
  getListPublis,
  deletePost,
  editPost,
  detailPost,
} from "../actions/PostsAction";

const AtributeTabel = ({ data }) => {
  const [status, setStatus] = useState("");
  const [postId, setPostId] = useState(data.id);
  const [isChecked, setIsChecked] = useState(Number(data.status));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { publisPostResult } = useSelector((state) => state.PostsReducer);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setStatus(!isChecked ? "1" : "0");
  };
  const handlePublis = async (e) => {
    e.preventDefault();
    if (isChecked) {
      // Lakukan sesuatu jika checkbox dicentang
      dispatch(publisPost({ status: status, id: postId }));
    } else {
      // Lakukan sesuatu jika checkbox tidak dicentang
      dispatch(publisPost({ status: status, id: postId }));
    }
  };

  useEffect(() => {
    if (publisPostResult) {
      setPostId(data.id);
      setStatus("");
      setIsChecked(Number(data.status));
    }
  }, [publisPostResult]);

  return (
    <>
      <table className="w-full whitespace-nowrap">
        <tbody>
          <tr
            key={data}
            tabindex="0"
            className="focus:outline-none h-16 border border-gray-100 rounded"
          >
            <td>
              <div className="ml-5">
                <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    id="status"
                    name="status"
                    placeholder="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                    onChange={handleCheckboxChange}
                  />
                  <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                    <svg
                      className="icon icon-tabler icon-tabler-check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </td>
            <td className="w-full">
              <div className="flex items-center pl-5">
                <p className="text-base font-medium leading-none text-gray-700 mr-2">
                  {data.title}
                </p>
              </div>
            </td>

            <td className="pl-4">
              <span class="inline-flex items-center rounded-lg bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {moment(data.updatedAt).format("MMMM D [at] h:mm A")}
              </span>
            </td>
            <td className="pl-10">
              <button
                onClick={handlePublis}
                className={`focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3  ${
                  data.status === "1" ? "bg-red-200 px-6" : "bg-gray-100 px-5"
                } rounded hover:bg-gray-200 focus:outline-none`}
              >
                {data.status === "1" ? "Draft" : "Publis"}
              </button>
            </td>
            <td>
              <div className="relative px-5 pt-2">
                <button
                  className="focus:ring-2 rounded-md focus:outline-none"
                  onClick={toggleDropdown}
                  role="button"
                  aria-label="option"
                >
                  <svg
                    className="dropbtn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                      stroke="#9CA3AF"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                      stroke="#9CA3AF"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                      stroke="#9CA3AF"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content block bg-white shadow w-24 absolute z-30 right-0 mr-6">
                    <div
                      tabindex="0"
                      onClick={() => dispatch(detailPost(data))}
                      className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Edit</p>
                    </div>
                    <div
                      tabindex="0"
                      onClick={() => dispatch(deletePost(data))}
                      className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                    >
                      <p>Delete</p>
                    </div>
                  </div>
                )}
              </div>
            </td>
          </tr>
          <tr className="h-3"></tr>
        </tbody>
      </table>
    </>
  );
};

export default AtributeTabel;
