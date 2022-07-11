import React from "react";
import { Layout } from "antd";
import { Link } from 'react-router-dom'
const { Sider } = Layout;

function Sidebar() {


  return (
    <Layout
      style={{
        display: "inline-block",
      }}
    >
      <Sider
        width={75}
        style={{
          margin: "0px 0px 0px 0px",
          minHeight: 668,
          float: "left",
        }}
        className="site bg-light"
      >
        <div>
          <Link className="navbar-brand" to={""}>
            <img
              style={{
                position: "relative",
                left: 20,
                top: 70,
                width: 35,
                cursor: "pointer",
              }}
              src="../Assets/Admin/group.png"
              alt="group1.png"
            />
          </Link>

          <Link className="navbar-brand" to={"AdMentor"}>
            <img
              style={{
                position: "relative",
                left: -28,
                top: 140,
                width: 35,
                cursor: "pointer",
              }}
              src="../Assets/Admin/team.png"
              alt="group1.png"
            />
          </Link>
          <Link className="navbar-brand" to={"AdRequest"}>
            <img
              style={{ position: "relative", left: -80, top: 210, width: 35 }}
              src="../Assets/Admin/adduser.png"
              alt="group1.png"
            />
          </Link>
        </div>
      </Sider>
    </Layout>
  );
}

export default Sidebar;
