import React from 'react'
import {Layout,Input,Button} from 'antd';
const { Header} = Layout;

function Navbar() {
  return (
<Layout>
      <Header className="header bg-light" >
 <div><img width={150} src="../Assets/Admin/logo1.png" alt='logo1'/>
 <Input style={{width:800,position:'relative', left:200,}} placeholder="Search Mentor/ Employee"/>
 <Button style={{position:'relative', left:425}}>Logout</Button>
</div>
</Header>
</Layout>
  )
}

export default Navbar