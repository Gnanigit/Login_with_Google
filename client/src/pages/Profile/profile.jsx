import React from "react";
import { useSelector } from "react-redux";
import "./profile.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authActions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { username, email, loginType, password } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profile-container">
      <h1>Welcome, {username}</h1>
      <p>Login Type: {loginType}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button type="submit" className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
