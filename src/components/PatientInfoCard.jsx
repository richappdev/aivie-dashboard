import React from 'react'
import { Card, Divider, Avatar, Button, Space } from 'antd';
import { UserOutlined } from "@ant-design/icons"
import moment from 'moment';

export default function PatientInfoCard({ ...props }) {
  const { name, gender, birthday, key, email, height, weight, photoUrl } = props.info
  return (
    <>
      <Card style={{ ...props.style }} size="small" title="Patient Info">
        <div>
          <center>
            <Avatar src={photoUrl} size={96} icon={<UserOutlined />} />
          </center>
          <h2 style={{ textAlign: "center" }}>{name}</h2>
        </div>
        <Divider />
        {key ? (<Space direction="vertical">
          <div>ID: <strong>{key}</strong></div>
          <div>Weight: <strong>{weight} kg</strong></div>
          <div>Height: <strong>{height} cm</strong></div>
          <div>Gender: <strong>{gender}</strong></div>
          <div>Age: <strong>{birthday && moment(new Date(birthday.seconds * 1000)).fromNow(true)}</strong></div>
          <div>Contact: <strong>{email}</strong></div>
          <center>
            <Button type="primary">View More</Button>
          </center>
        </Space>) : (<div>Please select a patient from list</div>)}
      </Card>
    </>
  )
}