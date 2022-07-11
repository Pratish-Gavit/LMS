import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { Layout,Input,Button,Modal,Breadcrumb,
  Space, Table, Tag,
  Form,
  Select,
} from 'antd';
import { useState } from 'react';
const { Content } = Layout;

function AdMentor() {

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
      title: 'Mentor Name',
      dataIndex: 'mentorname',
      key: 'mentor name',
      render: (text) => <a>{text}</a>,
    },
      {
        title: 'Employee ID',
        dataIndex: 'employeeid',
        key: 'employee id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'E-mail ID',
        dataIndex: 'emailid',
        key: 'email id',
        render: (text) => <a>{text}</a>,
      },
      
      {
        title: 'Skills',
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
      }
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
          <Breadcrumb.Item>Mentor</Breadcrumb.Item>
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
          padding: '10px'}}><span style={{color:'#FAA81D', position:'relative',left:50}}>Mentors List</span>
         <Input style={{width:300,position:'relative', left:852}} placeholder="Search Mentor/ Employee"/>
         <>
      <Button style={{position:'relative', left:870, borderRadius:5,backgroundColor: 'rgb(250,168,29)',color:'white'}} type='default' onClick={showModal}>
        +New Mentor
      </Button>
      <Modal title="Add new mentor" visible={isModalVisible} onCancel={handleCancel}footer={[<Button onClick={handleCreate} type="primary">Create</Button>]} >
      <Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
    
    >
      <Form.Item label="Mentor Name">
        <Input />
      </Form.Item>
      <Form.Item label="Employee ID">
        <Input />
      </Form.Item>
      <Form.Item label="Email ID">
        <Input />
      </Form.Item>
      <Form.Item
        name="Selectmultiple"
        label="Skills"
        rules={[
          {
            message: 'Please select skills',
            type: 'array',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select skills">
          <Option value="red">React</Option>
          <Option value="green">Java</Option>
          <Option value="blue">Angular</Option>
        </Select>
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

export default AdMentor
