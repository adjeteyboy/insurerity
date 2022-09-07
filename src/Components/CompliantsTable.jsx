import { Spin, Table, Tag } from "antd";
import { useComplaints } from "../hooks/useComplaints";

function CompliantsTable() {
  const { data, loading, error } = useComplaints()

  let dataSource = []

  const columns = [
    {
      title: 'Complaint ID',
      dataIndex: 'complaintId',
      key: 'complaintId',
    },
    {
      title: 'Complaint',
      dataIndex: 'complaint',
      key: 'complaint',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      render: (_, { source }) => {
        let color = source === 'web' ? 'geekblue' : 'green'

        return (<>
          <Tag color={color}>{source}</Tag>
        </>)
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
  ];


  if (data) {
    data.complaint.map(c => {
      dataSource.push({
        ...c,
        key: c.id,
        companyName: c.company.name.toUpperCase(),
        complaintId: !c.complaintId ? 'No Value' : c.complaintId
      })
    })
  }

  return (
    <div className='min-h-[200px]'>
      {loading && <div className="flex justify-center pb-4"><Spin /></div>}

      {data && <Table
        columns={columns}
        dataSource={dataSource}
      />}
    </div>
  )

}

export default CompliantsTable