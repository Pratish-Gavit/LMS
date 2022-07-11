import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import './EmployeeReg.css'
import Primary from './EmployeeDetails/Primary';
import Secondary from './EmployeeDetails/Secondary';
import EducationDetails from './EmployeeDetails/EducationDetails';
import AddressDetails from './EmployeeDetails/AddressDetails';
import BankDetails from './EmployeeDetails/BankDetails';
import TechanicalSkills from './EmployeeDetails/TechnicalSkills';
import Experience from './EmployeeDetails/Experience';
import Contact from './EmployeeDetails/Contact';


const { Step } = Steps;
const steps = [
  {
    title: 'Primary',
    content: <Primary />,
  },
  {
    title: 'Secondary',
    content: <Secondary />,
  },
  {
    title: 'Education Details',
    content:<EducationDetails />,
  },
  {
    title: 'Address Details',
    content: <AddressDetails/>,
  },
  {
    title: 'Bank Details',
    content: <BankDetails />,
  },
  {
    title: 'Technical skills',
    content:<TechanicalSkills />,
  },
  {
    title: 'Experience',
    content: <Experience />,
  },
  {
    title: 'Contact',
    content: <Contact />,
  },
];

function EmployeeReg() {

    const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className='main'>
    <Steps current={current}>
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
    <div className="steps-content">{steps[current].content}</div>
    <div className="steps-action">
      {current < steps.length - 1 && (
        <Button className='btn_nxt' type="primary" onClick={() => next()}>
          Next
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button type="primary" className='btn_nxt' onClick={() => message.success('Processing complete!')}>
          Done
        </Button>
      )}
      {current > 0 && (
        <Button
          style={{
            margin: '0 8px',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
    </div>
  </div>
  )
}

export default EmployeeReg