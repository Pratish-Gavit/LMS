import React from 'react'
import { Input,Col,Row,Form,Collapse } from 'antd';
import 'antd/dist/antd.css';
const { Panel } = Collapse;

function EducationDetails() {
  return (
    <div>
    <Collapse defaultActiveKey={['1']} >
      <Panel header="Education Details" key="1" >
    <Form layout='vertical'>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Education Type"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Year Of Passing"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Percentage (%)"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="University Name"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Institute Name"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Specialization"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="State"><Input /></Form.Item></Col >
            </Row>
    </Form> 
    </Panel>  
    </Collapse>   
  </div>
  )
}

export default EducationDetails