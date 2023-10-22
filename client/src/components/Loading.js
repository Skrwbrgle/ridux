import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <ReactLoading type={"bars"} color="#421a99" height={80} width={80} />
    </div>
  );
};

export default Loading;
