import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Layout,Input,Breadcrumb} from 'antd';
const { Content } = Layout;

function AdRequest() {
  const columns = [
    { field: 'id', headerName: 'No.', width: 70 },
  { field: 'employeeid', headerName: 'Employee ID', width: 130 },
  { field: 'employeename', headerName: 'Employee name', width: 130 },
  { field: 'yop', headerName: 'YOP', width: 130 },
  { field: 'percentage', headerName: 'Percentage', width: 130 },
  { field: 'experience', headerName: 'Experience', width: 130 },
  { field: 'contactno', headerName: 'Contact No', width: 130 },

  ];
  
  const rows = [
    { id: 4, employeeid: '#23245', employeename: 'Arya', age: 16,yop:2022,percentage:'85%',experience: 'Fresher',contactno:'8108586567'},

  ];
  
   
  return (
      <Layout
        style={{
          padding: '0 24px 24px',
          display:'inline-block',
          float:'right',
          width:'95%',
        }}
      >
      <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Request</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site bg-light"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 590,
          }}
        >
         <div style={{
          height: '50px',
          padding: '10px'}}><span style={{color:'#FAA81D', position:'relative',left:50}}>Request List</span>
         <Input style={{width:300,position:'relative', left:950}} placeholder="Search Mentor/ Employee"/>
         
         </div>
         <div  style={{
            minHeight: 20,
            padding: 0,
            margin: 0,
          }} >

         </div>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </Content>
    </Layout>
  )
}

export default AdRequest
