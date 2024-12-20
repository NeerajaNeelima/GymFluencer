
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home';
import Workout_plan from './Pages/Workout_plan';
import Diet_plan from './Pages/Diet_plan';
import Workout_plan_form from './Pages/workout_plan_form';
import Diet_plan_form from './Pages/Diet_plan_form';
function App() {

 
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='workout_plan' element={<Workout_plan/>}/>
        <Route path='/diet_plan' element={<Diet_plan/>}/>
        <Route path='/workout_plan_form' element={<Workout_plan_form/>}/>
        <Route path='/diet_plan_form' element={<Diet_plan_form/>}/>
      </Routes>
    </Router>

  );
}

export default App;
