import React from "react";
import moment from "moment";

const PostCard = ({ data }) => {
  return (
    <>
      <div class="container mx-auto my-5">
        <div class="mx-2 px-8 py-6 ">
          <div class="w-auto">
            <div class="border-2  rounded-lg shadow-md">
              <div class="px-6 py-5">
                <div class="flex align-middle justify-between">
                  <div
                    class="up w-10 h-9 bg-cover rounded-full"
                    style={{ backgroundImage: `url(${data.user.image})` }}
                  >
                    {/* <img class="rounded-full " src={data.user.image} alt="" /> */}
                  </div>
                  <div class="text-xs mx-3 w-full">
                    <p class="w-auto">
                      <a href="#" class="font-semibold">
                        {data.user.username}
                      </a>
                    </p>
                    <p class="w-auto">
                      <a href="#" class="font-light">
                        {moment(data.updatedAt).format("MMMM D [at] h:mm A")}
                      </a>
                    </p>
                  </div>
                  <div class="h-auto">
                    <div class="ab lv avk" data-headlessui-state=" ">
                      <div>
                        <button
                          class="p-2 "
                          id="headlessui-menu-button-1"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-5 fill-slate-600"
                          >
                            <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-6 pb-6">
                <img
                  class="w-auto pb-5"
                  src={data.image}
                  // src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_1280.jpg"
                ></img>
                <p>{data.textPost}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
