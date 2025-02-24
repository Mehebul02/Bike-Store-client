import { Layout, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Sidebar from './Sidebar';

const { Header, Content, } = Layout;



const Dashboard = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboard;