import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MentorBatch from './MentorBatch';
import MentorNavbar from './MentorNavbar';
import MentorDashboard from './MentorDashboard';
import EmployeeList from './EmployeeList';

function Mentor() {
  return (
    <div>
     <BrowserRouter>
      <MentorNavbar/>
      <Routes>
      <Route path='/MentorBatch' element={ <MentorBatch />} />
      <Route path='/MentorBatch' element={ <MentorDashboard />} />
      <Route path='/EmployeeList' element={ <EmployeeList />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mentor
