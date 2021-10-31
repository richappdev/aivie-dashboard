import React from 'react'
import { Card, Divider, Button } from 'antd';

export default function PatientInfoCard({ ...props }) {
  const { name, gender, age, id, contact } = props.info
  return (
    <>
      <Card size="small" title="Patient Info">
        <div>
          <center>
            <img width="100"
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />
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