import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import React from 'react'
import { useState} from 'react';
import {Layout,Input,Avatar,Dropdown, Menu, Space,
  Modal} from 'antd';
const { Header,Sider} = Layout;

function MentorNavbar() {
 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu
      items={[
        {
          label: 'Profile',
          key: '0',
        },
        {
          label:<> <a type="default" onClick={showModal}>
          Change password
        </a>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </>,
          key: '1',
        },
        {
          label: 'Logout',
          key: '3',  
        },
      ]}
    />
  );
  

  return (
    <Layout>
    <Layout style={{
    }}>
      <Header className="header bg-light "  >
 <img width={150} src="../Assets/Admin/logo1.png" alt='logo1'/>
 <Input style={{width:600,position:'relative', left:200, height: 30}} placeholder="Search Mentor/ Employee"/>
  <div style={{position:'absolute',top:5, right:50}}>
  
  <Dropdown placement="bottomRight"  overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar  
    size={{
      md: 40,
      lg: 64,
    }}
    icon={<img width={150} src="../Assets/Mentor/Avatar.png" alt='logo1'/>}
  />
        Shalani
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </div>
</Header>
</Layout>
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
          <Link className="navbar-brand" to={"/MentorDashboard"}>
            <img
              style={{
                position: "relative",
                left: 20,
                top: 70,
                width: 35,
                cursor: "pointer",
              }}
              src="../Assets/Mentor/dashboard.png"
              alt="group1.png"
            />
          </Link>

          <Link className="navbar-brand" to={"/MentorBatch"}>
            <img
              style={{
                position: "relative",
                left: -29,
                top: 140,
                width: 35,
                cursor: "pointer",
              }}
              src="../Assets/Admin/group.png"
              alt="group1.png"
            />
          </Link>
        </div>
      </Sider>
    </Layout>
    </Layout>

  )
}

export default MentorNavbar