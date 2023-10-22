import axios from "axios";

export const GET_LIST_POSTS = "GET_LIST_POSTS";
export const GET_LIST_PUBLIS = "GET_LIST_PUBLIS";
export const PUBLIS_POST = "PUBLIS_POST";
export const DETAIL_POST = "DETAIL_POST";
export const CLEAR_DETAIL_POST = "CLEAR_DETAIL_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

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
      headers: { Authorization: `Bearer ${accessToken}` },
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
      headers: { Authorization: `Bearer ${accessToken}` },
      data: data,
    })
      .then((res) => {
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

export const addPost = (data) => {
  return (dispacth) => {
    //loading
    dispacth({
      type: ADD_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const accessToken = localStorage.getItem("access_token");
    //get API
    axios({
      method: "POST",
      url: `http://localhost:3000/posts/create`,
      timeout: 120000,
      headers: { Authorization: `Bearer ${accessToken}` },
      data: data,
    })
      .then((res) => {
        dispacth({
          type: ADD_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispacth({
          type: ADD_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const editPost = (data) => {
  return (dispacth) => {
    //loading
    dispacth({
      type: EDIT_POST,
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
      url: `http://localhost:3000/posts/update?postId=${data.id}`,
      timeout: 120000,
      headers: { Authorization: `Bearer ${accessToken}` },
      data: data,
    })
      .then((res) => {
        dispacth({
          type: EDIT_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispacth({
          type: EDIT_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deletePost = (data) => {
  return (dispacth) => {
    //loading
    dispacth({
      type: DELETE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const accessToken = localStorage.getItem("access_token");
    //get API
    axios({
      method: "DELETE",
      url: `http://localhost:3000/posts/delete?postId=${data.id}`,
      timeout: 120000,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => {
        console.log("delete data: ", res.data);
        dispacth({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispacth({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const detailPost = (data) => {
  return (dispacth) => {
    dispacth({
      type: DETAIL_POST,
      payload: {
        data: data,
      },
    });
  };
};
