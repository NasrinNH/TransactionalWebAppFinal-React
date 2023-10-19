import { useState } from "react";
import { signInWithGoogle } from "../../Firebase";
import { useIntl } from "react-intl";
import translate from "../../i18nProvider/translate";

import "./signInPage.scss";

const SignInPage = ({ onUserSignedIn }) => {
  const intl = useIntl();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpFamily, setSignUpFamily] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function onSignInWithGoogle() {
    signInWithGoogle()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        onUserSignedIn({
          userName: displayName,
          email,
          imageUrl: photoURL,
          isManager: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSignInEmail(e) {
    setSignInEmail(e.target.value);
  }

  function handleSignInPassword(e) {
    setSignInPassword(e.target.value);
  }

  function onSignInWithEmail(e) {
    e.preventDefault();
    fetchUser({ email: signInEmail, password: signInPassword });
  }

  function handleSignUpName(e) {
    setSignUpName(e.target.value);
  }

  function handleSignUpFamily(e) {
    setSignUpFamily(e.target.value);
  }

  function handleSignUpEmail(e) {
    setSignUpEmail(e.target.value);
  }

  function handleSignUpPassword(e) {
    setSignUpPassword(e.target.value);
  }

  function fetchUser(data) {
    fetch("https://transactionalwebappfinal-node.onrender.com/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        onUserSignedIn({
          userName: `${data.user.f_name} ${data.user.l_name}`,
          email: data.user.email,
          imageUrl: data.user.image_url,
          isManager: data.user.role === "admin",
        });
      });
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    signUpUser({
      f_name: signUpName,
      l_name: signUpFamily,
      email: signUpEmail,
      password: signUpPassword,
    });
  }

  function signUpUser(data) {
    fetch("https://transactionalwebappfinal-node.onrender.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setShowSuccessMessage(true);
      });
  }

  return (
    <div>
      <div className="Wrapper-SignInPage">
        <section className="Left-container-SignInPage">
          <h1 className="Head-Left-container-SignInPage">
            {translate("loginToYourAccount")}
          </h1>
          <p className="Sub-Head-Left-container-SignInPage">
            {translate("loginSocialNetworks")}
          </p>
          <div className="icon-Left-container-SignInPage">
            <i className="lni lni-facebook-fill bg-icon-Left-SignInPage-blue "></i>
            <i
              className="lni lni-google bg-icon-Left-SignInPage-red"
              onClick={onSignInWithGoogle}
            ></i>
          </div>

          <div className="line-divider">
            <hr className="line-size" />
            <span>{translate("or")}</span>
            <hr className="line-size" />
          </div>
          <form className="signIn-form" onSubmit={onSignInWithEmail}>
            <div className="email">
              <input
                type="email"
                className="form-control"
                placeholder={intl.formatMessage({ id: "email" })}
                onChange={handleSignInEmail}
                value={signInEmail}
                required
              />
            </div>

            <div className="password">
              <input
                type="password"
                className="form-control"
                placeholder={intl.formatMessage({ id: "password" })}
                onChange={handleSignInPassword}
                value={signInPassword}
                required
              />
            </div>

            <div className="password-reasign">
              <div className="remember-me custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  {translate("remember")}
                </label>
              </div>
              <div>
                <span>
                  <a href="#" className="forget-password">
                    {translate("forgetPassword")}?
                  </a>
                </span>
              </div>
            </div>
            <div className="signIn-form-btn-container">
              <button type="submit" className="signIn-form-btn">
                {translate("signin")}
              </button>
            </div>
          </form>
        </section>
        <section className="right-container-SignInPage">
          <div className="close-icon">
            <i className="lni lni-close"></i>
          </div>
          <div>
            <h1 className="Head-Right-container-SignInPage">
              {translate("newHere")}?
            </h1>
            <p className="Sub-Head-Right-container-SignInPage">
              {translate("createAccount")}
            </p>
            <form className="signIn-form" onSubmit={handleSignUpSubmit}>
              <div className="signUp-inputs">
                <div className="f_name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "firstName" })}
                    onChange={handleSignUpName}
                    value={signUpName}
                    required
                  />
                </div>
                <div className="l_name">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "lastName" })}
                    onChange={handleSignUpFamily}
                    value={signUpFamily}
                    required
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "email" })}
                    onChange={handleSignUpEmail}
                    value={signUpEmail}
                    required
                  />
                </div>

                <div className="password">
                  <input
                    type="password"
                    className="form-control"
                    placeholder={intl.formatMessage({ id: "password" })}
                    onChange={handleSignUpPassword}
                    value={signUpPassword}
                    required
                  />
                  {/* <i class="lni lni-eye"></i> */}
                </div>

                {showSuccessMessage && (
                  <div className="successful">
                    <p>{translate("success")}</p>
                  </div>
                )}
              </div>

              <div className="signUp-form-btn-container">
                <button type="submit" className="signUp-form-btn">
                  {translate("createAccount")}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignInPage;
