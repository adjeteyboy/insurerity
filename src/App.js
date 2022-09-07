import 'antd/dist/antd.css';
import './App.css';
import { Button } from 'antd'
import CompliantsTable from './Components/CompliantsTable';
import { useState } from 'react';
import AddComplaintModal from './Components/AddComplaintModal';


function App() {
  const [modalOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-center  h-screen bg-slate-50 ">
      <div className="bg-slate-100 rounded-md p-6 min-w-[538px]">

        <div className='flex justify-between mb-5'>
          <h3 className='font-bold'>Compliants</h3>
          <Button
            onClick={() => setOpen(true)}
          >
            Add compliant
          </Button>
        </div>

        <CompliantsTable />

        <AddComplaintModal
          modalOpen={modalOpen}
          setOpen={setOpen}
        />

      </div>
    </div >
  );
}




export default App;
