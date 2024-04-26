import React from "react";
import { useSelector } from "react-redux";
import './dashboard.css'

const Dashboard = () => {
  const data =useSelector((state)=>state.userDetail)

  const {user} = data
  return (
    <section className="dashboard-container">
      <div className="settings">
        <p>Account Settings</p>
      </div>
      <div className="user-content">
        <div className="profile">
          <img className="img-icon" src={require("../images/Ellipse.png")} alt="" />
          <img className="img-change" src={require("../images/Group.png")} alt="" />
        </div>
        <div className="user-detail">
          <p className="p-name">{user.name}</p>
          <p className="p-email">{user.email}</p>
        </div>
      </div>
        <p className="description">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </section>
  );
};

export default Dashboard;
