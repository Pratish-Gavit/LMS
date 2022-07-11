import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AdMentor from './AdMentor';
import AdRequest from './AdRequest';
import AdBatch from './AdBatch';



function Admin() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='' element={<AdBatch/>} />
        <Route path='AdMentor' element={<AdMentor/>} />
        <Route path='AdRequest' element={<AdRequest/>} />
      </Routes>
    </div>
  )
}

export default Admin