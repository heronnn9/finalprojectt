import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import apiServices from "../../Services/API/Api";
import "./NewLogin.css";
const LOGIN_URL = "/User/Login";
const Login = () => {
  const [email, setEMail] = useState("");
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await apiServices.post(LOGIN_URL, user);
    setUser(response.data);
    setSuccess(true);
    localStorage.setItem("user", JSON.stringify(response.data));
  };
  const handleLogin = () => {
    if (success == true) {
      navigate("/movies");
    }
  };

  return (
    <div>
      <div className="Login-Background" />
      <div className="Login-Form">
        <div className="Form">
          <h1>Welcome To Moviestagram</h1>
          <FontAwesomeIcon className="Login-Icon" icon={faUser} />
          <div className="Login-Inputs">
            <form className="Forms" onSubmit={handleSubmit}>
              <label className="labels" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="Login-Input"
                type="text"
                id="user"
                onChange={(e) => setEMail(e.target.value)}
                value={email}
                required
              />
              <label className="labels" htmlFor="password">
                Password:
              </label>
              <input
                className="Login-Input"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button onClick={handleLogin} type="submit" className="Log-In">
                Sign In
              </button>
            </form>
            <Link to="/register" className="Register">
              {" "}
              Need an Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* {success ? (
  <section>
    <h1>Welcome {user.Name} </h1>
    <h1>You are logged in!</h1>
    <br />
    <p>
      <Link to="/mainpage">Go to Home</Link>
    </p>
  </section>
) : (
  <section className="Login-Form">
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
)} */
}
