import React from 'react'
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExercisePage from './components/ExercisePage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Contact  from './components/Contact';
import  About  from './components/About';
import  Faqs  from './components/Faqs';


const App = () => {
  return (
    <Box width="400px" sx={{width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
            <Route path ='/exercisepage' element={<ExercisePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faqs' element={<Faqs />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App