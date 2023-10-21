import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, register } from "../../actions/UserAction";

function LoginRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const dispacth = useDispatch();
  const { loginResult, registerResult } = useSelector(
    (state) => state.UserReducer
  );

  const handleRegisterClick = () => {
    setIsRegisterVisible(true);
  };

  const handleLoginClick = () => {
    setIsRegisterVisible(false);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // Tambahkan logika otentikasi di sini
    dispacth(Login({ email: email, password: password }));
    if (loginResult) {
      window.location.href = "/";
      return;
    }
  };

  const handleSubmitRegis = async (e) => {
    e.preventDefault();

    // Tambahkan logika otentikasi di sini
    dispacth(
      register({ username: username, email: email, password: password })
    );
    if (registerResult) {
      window.location.href = "/login-register";
      return;
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto flex justify-center">
          <form
            onSubmit={(e) => handleSubmitRegis(e)}
            className={`absolute px-4 py-10 sm:p-20 inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg  transform ${
              isRegisterVisible
                ? "translate-x-0 z-10 rotate-0"
                : " z-0 -skew-y-6 sm:skew-y-0 sm:-rotate-6"
            }  sm:rounded-3xl transition-transform duration-500`}
          >
            {/* register */}
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-semibold text-slate-50">
                  Register Now
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-slate-50 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-white bg-transparent text-white
                      focus:outline-none focus:borer-rose-600 mb-1"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label
                      for="username"
                      className="absolute left-0 -top-3.5 text-slate-50 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-slate-50 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:borer-rose-600 mb-1"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      for="email"
                      className="absolute left-0 -top-3.5 text-slate-50 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-slate-50 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-slate-50 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-slate-50 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-slate-50 hover:bg-blue-400 text-blue-500 hover:text-white border-2 hover:border-slate-50 rounded-md px-2 py-1 mt-5 w-full text-md"
                    >
                      Register
                    </button>
                    <button
                      onClick={handleLoginClick}
                      className="border-slate-50 border-2 text-slate-50 hover:bg-slate-50 hover:text-blue-500 rounded-md px-2 py-1 mt-5 w-full text-md"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className={`relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 ${
              !isRegisterVisible
                ? "translate-x-0 z-10 sm:rotate-0"
                : " z-0 skew-y-6 sm:skew-y-0 sm:-rotate-6"
            } -rotate-6 transition-transform duration-500`}
          >
            {/* login */}
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl mb-3.5 font-semibold text-slate-600">
                  login Now
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={(e) => handleSubmitLogin(e)}
                  className="py-8 text-base leading-6 space-y-4 text-blue-500 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-blue-500 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      for="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-blue-500 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      for="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-2 py-1 mt-5 w-full text-md"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleRegisterClick}
                      className="border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-2 py-1 mt-5 w-full text-md"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
