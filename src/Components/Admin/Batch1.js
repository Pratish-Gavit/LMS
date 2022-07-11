import { Layout,Input,Button,Modal,Breadcrumb} from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

function Batch1() {
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
         <Input style={{width:400,position:'relative', left:400}} placeholder="Search Mentor/ Employee"/>
         {/* <>
      <Button style={{position:'relative', left:540, borderRadius:5,backgroundColor: 'rgb(250,168,29)',color:'white'}} type='default' onClick={showModal}>
        +New Batch
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </> */}
         </div>
         <div  style={{
            minHeight: 480,
            padding: 0,
            margin: 0,
          }} >

         </div>
    </Content>
    </Layout>
  )
}

export default Batch1
