import { useRef } from "react";
import classes from "./ProfileForm.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtxt = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredNewPasswordd = newPasswordInputRef.input.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCTpLpC1-TQb_RLvQhJWd1Uk5CX5mCsRnA",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtxt.token,
          password: enteredNewPasswordd,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
