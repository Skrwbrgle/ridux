import React from "react";

const PostCard = () => {
  return (
    <>
      <div class="container mx-auto my-5">
        <div class="mx-2 px-8 py-6 ">
          <div class="w-auto">
            <div class="border-2  rounded-lg shadow-md">
              <div class="px-6 py-5">
                <div class="flex align-middle justify-between">
                  <div class="up">
                    <img
                      class="rounded-full w-10"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-xs mx-3 w-full">
                    <p class="w-auto">
                      <a href="#" class="font-semibold">
                        Chelsea Hagon
                      </a>
                    </p>
                    <p class="w-auto">
                      <a href="#" class="font-light">
                        December 9 at 11:43 AM
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
                  src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_1280.jpg"
                ></img>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                  impedit sapiente recusandae iusto officiis dolor? Laborum
                  quibusdam quam, quidem vel assumenda repellat inventore sint
                  nesciunt, ullam asperiores magnam placeat eveniet. Aliquam
                  voluptatibus assumenda distinctio veniam quam tempora modi
                  aperiam nemo voluptate reprehenderit quidem, nisi vero est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
