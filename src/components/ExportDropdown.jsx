import { Menu, Dropdown, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"

export default function ExportDropdown({ ...props }) {
  const menu = (<Menu>
    {props.items.map(i => <Menu.Item key={i}>{i}</Menu.Item>)}
  </Menu>)
  return (<Dropdown overlay={menu} placement="bottomLeft">
    <Button type="primary"><DownloadOutlined /></Button>
  </Dropdown>)
}