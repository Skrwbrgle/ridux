import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const Login = (data) => {
  return (dispacth) => {
    //loading
    dispacth({
      type: LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: "http://localhost:3000/users/login",
      timeout: 120000,
      data: data,
    })
      .then((res) => {
        dispacth({
          type: LOGIN,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
        const access_token = res.data.access_token;
        localStorage.setItem("access_token", access_token);
      })
      .catch((err) => {
        dispacth({
          type: LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const register = (data) => {
  console.log(`2. Masuk Acrtion `);
  return (dispacth) => {
    //loading
    dispacth({
      type: REGISTER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: "http://localhost:3000/users/register",
      timeout: 120000,
      data: data,
    })
      .then((res) => {
        console.log(`3. Data Masuk : `, res.data);
        dispacth({
          type: REGISTER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
        const access_token = res.data.access_token;
        localStorage.setItem("access_token", access_token);
      })
      .catch((err) => {
        console.log(`3. Data Error : `, err.message);
        dispacth({
          type: LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
