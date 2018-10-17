import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class SiderMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e)
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/">ReactDnD</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/PerformanceDemo1">PerformanceDemo1</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/FiberDemo">FiberDemo</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/ReactVirtualized">ReactVirtualized</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default SiderMenu
