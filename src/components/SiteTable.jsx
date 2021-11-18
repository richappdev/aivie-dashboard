import { useEffect, useState } from "react"
import { loadOrganizations } from "../firebase";
import { Table } from "antd"

export default function SiteTable() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];
  const [site, setSite] = useState([])
  useEffect(() => {
    loadOrganizations().then((sites) => {
      setSite(sites)
    })
  }, [])
  return (<div>
    <Table dataSource={site} columns={columns} pagination={{ pageSize: 30 }} />;
  </div>)
}