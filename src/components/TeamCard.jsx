import React from 'react'
import { Card, Avatar, Button } from 'antd';
import { UserOutlined } from "@ant-design/icons"

export default function TeamCard({ ...props }) {
  console.log(props.size);
  let avatarList = [];
  for (let i = 0; i < props.size; i++) avatarList.push(<Avatar size="small" icon={<UserOutlined />} />)

  return (
    <Card size="small" title="Team">
      <div>
        <strong>Pat...</strong>
        <br />
        <div>{avatarList}</div>
        <strong>BCBA</strong>
        <br />
        <div>{avatarList}</div>
        <strong>Operation</strong>
        <br />
        <div>{avatarList}</div>
        <br />
        <center>
          <Button>View All</Button>
          <br />
          <Button type="primary">Invite Teams</Button>
        </center>
      </div>
    </Card>
  )
}
