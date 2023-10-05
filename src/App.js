import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseList from './pages/ExerciseList';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488'}}} m = "auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/ExerciseList" element={<ExerciseList />} /> 
      </Routes>
      <Footer />
    </Box>
  )
}

export default App