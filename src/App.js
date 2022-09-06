import 'antd/dist/antd.css';
import './App.css';
import { Button, Input, Modal, Select, Table } from 'antd'
import CompliantsTable from './Components/CompliantsTable';
const { Option } = Select


function App() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-slate-100 rounded-md p-6">

        <div className='flex justify-between mb-5'>
          <h3 className='font-bold'>Compliants</h3>
          <Button>Add compliant</Button>
        </div>

        <CompliantsTable />

        <Modal
          title="Enter a compliant"
          visible={true}
        >
          <Input
            className='mb-4 block'
            placeholder='Compliant'
          />
          <Select defaultValue="">
            <Option value="">Select an option</Option>
            <Option value="web">Web</Option>
            <Option value="mobile">Mobile</Option>
          </Select>
        </Modal>

      </div>
    </div>
  );
}




export default App;
