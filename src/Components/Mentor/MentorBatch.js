import { RightOutlined, WarningFilled} from '@ant-design/icons';
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Input, Breadcrumb, Space, Table, Button, Popover,Modal } from 'antd';
const {Content } = Layout;


const content = (
  <div>
    <table>
      <tr><td>Initial strength</td><td>100</td></tr>
      <tr><td>Dropout</td><td>10</td></tr>
      <tr><td>Terminated </td><td>10</td></tr>
      <tr><td>Absconding </td><td>10</td></tr>
      <tr><td>Present strength</td><td>70</td></tr>
    </table>
  </div>
);

function MentorBatch() {

  let navigate= useNavigate()

  let navigateToEmployeeList=()=>{

    navigate("/EmployeeList")

  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

    const columns = [{
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text) => <a>{text}</a>,
    },
      {
        title: 'Batch ID',
        dataIndex: 'batchid',
        key: 'batch id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Batch Name',
        dataIndex: 'batchname',
        key: 'batch name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Technologies',
        dataIndex: 'technologies',
        key: 'mentor name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Start Date',
        dataIndex: 'startdate',
        key: 'start date',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'End Date',
        dataIndex: 'enddate',
        key: 'end date',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Batch Strength',
        key: 'action',
        render: (_, record) => (
          <Space size="middle" >
      <Popover  placement="bottom" content={content}>
      <WarningFilled style={{color:'#C9A805',fontSize:30}}/>
      </Popover>
          </Space>
        ),
      },
      
      {
        title: '',
        key: 'action',
        render: (_, record) => (
      <Space size="middle">
        <>
      <Button type="default" onClick={showModal}>
        Atendance
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
     <RightOutlined style={{cursor:'pointer'}} onClick={navigateToEmployeeList} />
      </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        no:1,
        batchid: "#35237",
        batchname: "abcd",
        technologies :'',
        startdate:'14 Mar 2022',
        enddate:'14 Apr 2022',
        // batchStrength:''
      }
    ];
     
  return (
      <Layout
        style={{
          padding: '0 24px 24px', 
          float:'right',
          width:'95%',
          position:'absolute',
          top:64,
          left: 76,
        }}
      >
      <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Request list</Breadcrumb.Item>
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
          padding: '10px'}}><span style={{color:'#FAA81D', position:'relative',left:50}}>Batch List</span>
         <Input style={{width:300,position:'relative', left:870}} placeholder="Search Mentor/ Employee"/>
    
         </div>
         <div  style={{
            minHeight: 20,
            padding: 0,
            margin: 0,
          }} >

<div style={{ height: 400, width: '100%' }}>
<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
         </div>
    </Content>
    </Layout>
  )
}

export default MentorBatch
