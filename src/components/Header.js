import React from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../Photos/logo.png';

function Header()
{
    const { SubMenu } = Menu;

    const { Header, Content, Footer, Sider } = Layout;

return(
    <>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width={30} height={29} className="d-inline-block align-text-top" />
     <h4 style={{display: 'inline'}}> FlixResume.Io </h4>
    </a>
  </div>
</nav>
    
    </>
)
}

export default Header;