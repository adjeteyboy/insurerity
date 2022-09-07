import { Button, Input, Form, Modal, Select } from "antd";
import { GET_COMPLIANTS } from "../hooks/useComplaints";
import { gql, useMutation } from "@apollo/client";

const { Option } = Select

const CREATE_COMPLAINT = gql`

  mutation($data: [complaint_insert_input!]!) {
    insert_complaint(objects: $data){
      affected_rows
    }
  }

`

export default function AddComplaintModal({ modalOpen, setOpen }) {

  const [form] = Form.useForm();

  const [createCompliant, { data, loading, error }] = useMutation(CREATE_COMPLAINT,
    {
      refetchQueries: [
        { query: GET_COMPLIANTS }, // DocumentNode object parsed with gql
      ],
    }
  )


  const handleOnFinish = values => {

    createCompliant({
      variables: {
        data: {
          ...values,
          companyId: "ad6f4da8-06af-45be-ba79-83156a72471f"
        }
      }
    })

    form.resetFields()
    setOpen(false)
  }

  return (
    <Modal
      title="Enter a compliant"
      open={modalOpen}
      onCancel={() => setOpen(false)}
      okText="Submit"
      footer={null}
    >

      <Form
        form={form}
        onFinish={handleOnFinish}
      >
        <Form.Item
          name="complaint"
          rules={[
            { required: true }
          ]}
        >
          <Input
            className='mb-4 block'
            placeholder='Compliant'
          />
        </Form.Item>

        <Form.Item
          className='w-36'
          name="source"
          rules={[
            { required: true }
          ]}
        >
          <Select
            defaultValue="">
            <Option value="">Select source</Option>
            <Option value="web">Web</Option>
            <Option value="mobile">Mobile</Option>
          </Select>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}