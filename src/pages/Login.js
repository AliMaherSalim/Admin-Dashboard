import React from "react";
import { LoginForm } from "../components/LoginForm";
const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-5 border border-2 border-black rounded p-4">
          <h3 className="text-center">Log in to your account 🔐</h3>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
