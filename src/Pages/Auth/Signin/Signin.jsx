import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Normally you'd check credentials with backend
    console.log("User signed in:", form);

    // ✅ Mark user as authenticated
    setIsAuthenticated(true);

    // ✅ Redirect to Home page
    navigate("/");
  };

  return (
    <div>
      <div className="form-container">
        <h2>Welcome to Lunele Bakes!</h2>
        <p>Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="johndoe"
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="*********"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            SIGN IN
          </button>
        </form>

        <p style={{ textAlign: "center" }}>
          New User? <a href="/sign-up">SIGN UP</a>
        </p>
      </div>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signin;
