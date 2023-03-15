import { useState } from "react";
import { Link } from "react-router-dom";
import apiServices from "../../Services/API/Api";
import "./Login.css";
const LOGIN_URL = "/User/Login";
const Login = () => {
  const [email, setEMail] = useState("");
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await apiServices.post(LOGIN_URL, user);
    console.log(response);
    setUser(response.data);
    setSuccess(true);
    localStorage.setItem(user, response.data);
    console.log(response.data.Name);
  };
  return (
    <div className="background">
      {success ? (
        <section>
          <h1>{user.EMail}You are logged in!</h1>
          <br />
          <p>
            <Link to="/mainpage">Go to Home</Link>
          </p>
        </section>
      ) : (
        <section>
          <p aria-live="assertive"></p>
          <h1>Welcome to the Moviestagram</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              className="Login-Input"
              type="text"
              id="user"
              autoComplete="off"
              onChange={(e) => setEMail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className="Sign-In">Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};
export default Login;
