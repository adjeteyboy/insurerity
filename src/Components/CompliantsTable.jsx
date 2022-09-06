import { Table } from "antd";

function CompliantsTable() {
  const columns = [
    {
      title: 'Compliant ID',
      dataIndex: 'compliantId',
      key: 'compliantId',
    },
    {
      title: 'Compliant',
      dataIndex: 'compliant',
      key: 'compliant',
    },
    {
      title: 'Compliant Name',
      dataIndex: 'compliantName',
      key: 'compliantName',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
  ];

  const dataSource = [
    {
      key: 1,
      compliantId: 1,
      compliant: 'Eric',
      compliantName: 'Eric',
      source: 'Eric',
      type: 'web'
    }
  ]

  return (

    <Table
      columns={columns}
      dataSource={dataSource}
    />
  )

}

export default CompliantsTable