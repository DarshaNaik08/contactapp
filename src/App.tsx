import React, { FC } from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import ChartsMaps from './pages/ChartsMaps';
// import EditContact from './pages/EditContact';
// import CreateContact from './pages/CreateContact';

const App: FC = () => {
  return (

    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<ChartsMaps />} /> */}
        <Route path="/" element={<Contact />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path="contact/edit-contact/:id" element={<EditContact data={props.}/>} /> */}
          {/* <Route path="create-contact" element={<CreateContact />} /> */}
        {/* </Route> */}
        {/* <Route path='/ChartsMaps' element={<ChartsMaps />} ></Route> */}
      </Routes>
    </BrowserRouter>



  );
}

export default App;
