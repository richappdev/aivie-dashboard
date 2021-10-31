import React from 'react'
import { Card, Divider, Button } from 'antd';

export default function TeamCard({ ...props }) {
  console.log(props.size);
  let avatarList = [];
  for (let i = 0; i < props.size; i++) avatarList.push(<DefaultAvatar />)

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

const DefaultAvatar = () => {
  return (<img width="30"
    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />)
}