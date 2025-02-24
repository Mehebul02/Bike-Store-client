import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from "react";
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );

const Sidebar = () => {
    return (
        <div>
            <div className="">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
                >
                <div style={{ color: 'white', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <h1 className="text-xl font-bold">Bike Store</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
        </div> 
        </div>
    );
};

export default Sidebar;