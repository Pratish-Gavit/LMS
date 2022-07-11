import React from 'react'
import './Login.css'
import { Form,Input } from 'antd';
import { useNavigate } from 'react-router-dom';


function Login() {

  let navigate= useNavigate()

  let useNavigateToLogin=()=>{
    navigate('/Admin')
  }

  let useNavigateToRegister=()=>{
    navigate('/Register')
  }
  
  return (
<div id='bg'>

<div id='box1'>

<div id='box11'>
  Good things on <br/> your way!
  </div>

  <div id='box2'>
  <div className='login_logo'></div>
  <div className='login_text'>Login</div>
  <div className='login_form'>
                <Form
                   labelCol={{ span: 8,}}
                    wrapperCol={{ span: 16 }}
                      layout='vertical'
                       >
      <Form.Item label={<label style={{ color: "white" }}>Employee ID</label>}
        name="username">
        <Input />
      </Form.Item>

      <Form.Item label={<label style={{ color: "white" }}>Password</label>} name="password">
        <Input.Password />
        </Form.Item>
                </Form>
                <div className='btn'>
                          <button onClick={useNavigateToLogin} >Login</button>
                          <button >Cancel</button>
                      </div>
                </div>
                <div className='register'>Already have an account? <span className='registerSpan'onClick={useNavigateToRegister} >Register</span></div>
                <div className='line'></div>
                <div className='footer'>
                      <div className='copyrights'>Copyright &copy; 2018 Aleercio.com  </div>
                      <div className='tc'>&emsp;&emsp;Terms & Conditions | Privacy policy</div> 
                      </div>        
  </div>
  
</div>
</div>

  )
}

export default Login