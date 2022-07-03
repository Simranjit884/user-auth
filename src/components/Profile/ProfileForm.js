import { useRef } from "react";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredNewPasswordd = newPasswordInputRef.input.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCTpLpC1-TQb_RLvQhJWd1Uk5CX5mCsRnA",
      {
        method: "POST",
        body: JSON.stringify(),
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
