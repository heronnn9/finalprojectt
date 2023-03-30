import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Login/Login.css";
import apiService from "../../Services/API/Api";

const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/;
const REGISTER_URL = "/User/Register";
const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [surname, setSurname] = useState("");
  const [validSurname, setValiSurname] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);

  const [email, setEMail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = USER_REGEX.test(surname);
    setValiSurname(result);
  }, [surname]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [name, surname, email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(name);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = USER_REGEX.test(surname);
    const v4 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await apiService.post(REGISTER_URL, {
        Name: name,
        EMail: email,
        Password: pwd,
        Surname: surname,
      });
      console.log(response?.data);
      console.log(response?.accessToken);
      setSuccess(true);
      setEMail("");
      setSurname("");
      setName("");
      setPwd("");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="background">
      <>
        {success ? (
          <section>
            <h1>Success!</h1>
            <p>
              <Link to="/">Sign In</Link>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h2>Moviestagram Register Form</h2>
            <form onSubmit={handleSubmit} className="Reg-Form">
              <label htmlFor="name">
                Name :
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validName ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validName || !name ? "hide" : "invalid"}
                />
              </label>
              <input
                className="Reg-Input"
                type="text"
                id="name"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  nameFocus && name && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <label htmlFor="surname">
                Surname :
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validSurname ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validSurname || !surname ? "hide" : "invalid"}
                />
              </label>
              <input
                className="Reg-Input"
                type="text"
                id="surname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setSurname(e.target.value)}
                required
                aria-invalid={validSurname ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setSurnameFocus(true)}
                onBlur={() => setSurnameFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  surnameFocus && surname && !validSurname
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <label htmlFor="email">
                Email :
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !email ? "hide" : "invalid"}
                />
              </label>
              <input
                className="Reg-Input"
                type="text"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEMail(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? "hide" : "invalid"}
                />
              </label>
              <input
                className="Reg-Input"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <button className="Sign-In">Sign Up</button>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                <Link to="/">Sign In</Link>
              </span>
            </p>
          </section>
        )}
      </>
    </div>
  );
};

export default Register;
