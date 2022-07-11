import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { Layout,Input,Button,Modal,Breadcrumb,
  Space, Table, Tag,
  DatePicker,
  Form,
  Select,
} from 'antd';
import { useState } from 'react';
const {Content } = Layout;

function AdBatch() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCreate = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const { Option } = Select;

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
        title: 'Mentor Name',
        dataIndex: 'mentorname',
        key: 'mentor name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Technologies',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = 'geekblue';

              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
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
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a><EditOutlined /></a>
            <a><DeleteFilled /></a>
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
        mentorname :'Satyam',
        tags:['React', 'Angular','java+springboot'],
        startdate:'14 Mar 2022',
        enddate:'14 Apr 2022',
      },
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
          <Breadcrumb.Item>Batch</Breadcrumb.Item>
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
         <>
      <Button style={{position:'relative', left:890, borderRadius:5,backgroundColor: 'rgb(250,168,29)',color:'white'}} type='default' onClick={showModal}>
        +New Batch
      </Button>
      <Modal title="Add new batch" visible={isModalVisible} onCancel={handleCancel} footer={[<Button onClick={handleCreate} type="primary">Create</Button>]}>
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

export default AdBatch
