import React from 'react'
import { Card, Divider, Avatar, Button } from 'antd';
import { UserOutlined } from "@ant-design/icons"

export default function PatientInfoCard({ ...props }) {
  const { name, gender, age, id, contact, photo } = props.info
  return (
    <>
      <Card style={{ ...props.style }} size="small" title="Patient Info">
        <div>
          <center>
            <Avatar src={photo} size={64} icon={<UserOutlined />} />
          </center>
          <h2 style={{ textAlign: "center" }}>{name}</h2>
        </div>
        <Divider />
        Gender
        <br />
        <strong>{gender}</strong>
        <br />
        Age
        <br />
        <strong>{age}</strong>
        <br />
        ID
        <br />
        <strong>{id}</strong>
        <br />
        Contact
        <br />
        <strong>{contact}</strong>
        <br /><br />
        <center>
          <Button type="primary">View More</Button>
        </center>
      </Card>
    </>
  )
}