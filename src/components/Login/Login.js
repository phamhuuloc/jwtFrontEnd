import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login  d-flex px-3 px-sm-0 ">
      <div className="container">
        <div className="row">
          <div className="content-left  col-12 d-none col-sm-7 d-sm-block ">
            <div className="brand">Github</div>
            <div className="detail">
              GitHub help you store source code and share this with your friends
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-block d-sm-none">Github</div>
            <input
              type="text"
              className="form-control"
              placeholder="Email or your phone"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center">
              <a href="#" className="forgot-password">
                Forgot your password
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button className="btn btn-success">Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
