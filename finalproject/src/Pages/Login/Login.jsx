import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Layouts/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import apiServices from "../../Services/API/Api";
import "./NewLogin.css";
const LOGIN_URL = "/User/Login";
const Login = () => {
  const [email, setEMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setUser] = useState();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { email, password };
    const response = await apiServices
      .post(LOGIN_URL, user)
      .finally((e) => setLoading(false));

    if (response !== undefined) {
      setUser(response.data);
      navigate("/mainpage");
      localStorage.setItem("user", JSON.stringify(response.data));
    }
  };

  return (
    <div>
      <div className="Login-Background" />
      <div className="Login-Form">
        <div className="Form">
          <h1>Welcome To Moviestagram</h1>
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
              <div className="Login-Loading">
                {loading ? (
                  <Loading className="Loading" />
                ) : (
                  <button type="submit" className="Log-In">
                    Login <FontAwesomeIcon icon={faArrowAltCircleRight} beat />
                  </button>
                )}
              </div>
            </form>
            <Link to="/register" className="Register">
              {" "}
              Create an Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
