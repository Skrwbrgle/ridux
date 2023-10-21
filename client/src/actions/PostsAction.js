import axios from "axios";

export const GET_LIST_POSTS = "GET_LIST_POSTS";

export const getListPosts = () => {
  console.log(`2. Masuk Acrtion `);

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
        console.log(`3. Berhasil Get Data : `, res.data);
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
        console.log(`3. Gagal Get Data : `, err.message);
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
