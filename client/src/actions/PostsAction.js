import axios from "axios";

export const GET_LIST_POSTS = "GET_LIST_POSTS";
export const GET_LIST_PUBLIS = "GET_LIST_PUBLIS";
export const PUBLIS_POST = "PUBLIS_POST";

export const getListPosts = () => {
  return (dispacth) => {
    //loading
    dispacth({
      type: GET_LIST_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/posts",
      timeout: 120000,
    })
      .then((res) => {
        dispacth({
          type: GET_LIST_POSTS,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispacth({
          type: GET_LIST_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const getListPublis = () => {
  return (dispacth) => {
    //loading
    dispacth({
      type: GET_LIST_PUBLIS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const accessToken = localStorage.getItem("access_token");
    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/users",
      timeout: 120000,
      headers: { Authorization: `${accessToken}` },
    })
      .then((res) => {
        dispacth({
          type: GET_LIST_PUBLIS,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispacth({
          type: GET_LIST_PUBLIS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const publisPost = (data) => {
  return (dispacth) => {
    //loading
    dispacth({
      type: PUBLIS_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const accessToken = localStorage.getItem("access_token");
    //get API
    axios({
      method: "PUT",
      url: `http://localhost:3000/posts/status?postId=${data.id}`,
      timeout: 120000,
      headers: { Authorization: `${accessToken}` },
      data: data,
    })
      .then((res) => {
        // console.log(`3. Berhasil Get Data : `, res.data);
        dispacth({
          type: PUBLIS_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        console.log(`3. Gagal Get Data : `, err.message);
        dispacth({
          type: PUBLIS_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
