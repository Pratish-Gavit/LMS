import { RightOutlined, CaretDownOutlined,WarningFilled} from '@ant-design/icons';
import { useState} from 'react';
import { Layout, Input, Breadcrumb, Space, Table, Button, Popover,Modal,Select,Form,DatePicker} from 'antd';
const {Content } = Layout;

const content = (
  <div>
    <table>
      <tr><td>Mock 1</td><td>Excellent</td></tr>
      <tr><td>Mock 2</td><td>Good</td></tr>
      <tr><td>Mock 3</td><td>Above average</td></tr>
      <tr><td>Mock 4</td><td>Average</td></tr>
      <tr><td>Mock 5</td><td>Below Average</td></tr>
    </table>
  </div>
);
const content1 = (
  <div>
    <table>
    <tr><td>Absconded</td></tr>
      <tr><td>Dropout</td></tr>
      <tr><td>Terminated </td></tr>
    </table>
  </div>
);

function EmployeeList() {

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
  const handleCreate = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const handleCreate1 = () => {
    setIsModalVisible1(false);
  };


  const { Option } = Select;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

    const columns = [{
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (text) => <a>{text}</a>,
    },
      {
        title: 'Employee ID',
        dataIndex: 'employeeid',
        key: 'employee id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Employee Name',
        dataIndex: 'employeename',
        key: 'employee name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Mocks Taken',
        dataIndex: 'mockstaken',
        key: 'mockstaken',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Mocks Rating',
        key: 'action',
        render: (_, record) => (
          <Space size="middle" >
      <Popover  placement="bottom" content={content}>
      <WarningFilled style={{color:'#C9A805',fontSize:30}} />
      </Popover>
          </Space>
        ),
      },
      {
        title: 'Attendance',
        dataIndex: 'attendance',
        key: 'attendance',
      },
      {
        title: 'Status',
        key: 'action',
        render: (_, record) => (
          <Space size="middle" >

      <Popover
      placement="bottom"
      content={content1}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
    Active <CaretDownOutlined style={{fontSize:15}} />
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
        Give rating
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[<Button onClick={handleCreate} type="primary">Create</Button>]}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
     <RightOutlined style={{cursor:'pointer'}}/>
      </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        no:1,
        employeeid: "#35237",
        employeename: "abcd",
        mockstaken :'2/5',
        attendance:'13/23',
        enddate:'14 Apr 2022',
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
          <Breadcrumb.Item>Batch name</Breadcrumb.Item>
          <Breadcrumb.Item>Employee list</Breadcrumb.Item>
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
          padding: '10px'}}><span style={{color:'#FAA81D', position:'relative',left:30}}>EmployeeList(Batch ID)</span>
         <Input style={{width:300,position:'relative', left:770}} placeholder="Search Mentor/ Employee"/>
         <>
      <Button style={{position:'relative', left:790, borderRadius:5,backgroundColor: 'rgb(250,168,29)',color:'white'}} type='default' onClick={showModal1}>
        +New Batch
      </Button>
      <Modal title="Add new batch" visible={isModalVisible1} onCancel={handleCancel1} footer={[<Button onClick={handleCreate1} type="primary">Create</Button>]}>
      <Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14 ,
      }}
      layout="vertical"
    
    >
      <Form.Item label="Batch Name">
        <Input />
      </Form.Item>
      <Form.Item label="Mentor Name">
        <Select>
          <Select.Option value="demo">Satyam Saurav</Select.Option>
          <Select.Option value="demo">Vijendra Singh</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        name="Selectmultiple"
        label="Technologies"
        rules={[
          {
            message: 'Please select your favourite colors!',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select Technologies">
          <Option value="red">React</Option>
          <Option value="green">Java</Option>
          <Option value="blue">Angular</Option>
        </Select>
      </Form.Item>
      <Form.Item label="StartDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="EndDate">
        <DatePicker />
      </Form.Item>
    </Form>
      </Modal>
    </>
 
    
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

export default EmployeeList
