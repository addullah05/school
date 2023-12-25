import { Menu,theme } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Link } from 'react-router-dom';
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Logo......','1', <PieChartOutlined/>),
    getItem((<Link to="schools">School1</Link>),'2',<PieChartOutlined/>),
    getItem((<Link to="academies">Academies</Link>),'3',<PieChartOutlined/>),
    getItem((<Link to="classes">Classes</Link>),'4',<PieChartOutlined/>),
    getItem((<Link to="teacher">Teachers</Link>),'5',<PieChartOutlined/>),
    getItem((<Link to="student">Students</Link>),'6',<PieChartOutlined/>),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem((<Link to="signup">SignUp</Link>), '7'),
      getItem((<Link to="login">Login</Link>), '8'),
    ]),
    getItem('Teams','sub2', <TeamOutlined />, [getItem('team1', '9'), getItem('team2', '10')]),
    getItem('Files', '11', <FileOutlined />),
  ];
  
const Navigation = () => {
    return (
        <>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </>
    );
}
export default Navigation;