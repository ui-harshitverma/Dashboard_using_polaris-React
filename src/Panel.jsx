
import React from 'react'
import { Route, Routes } from 'react-router';
import Dashboard1 from './Dashboard/Dashboard1';
import Dashboard2 from './Dashboard/Dashboard2';
import Dashboard3 from './Dashboard/Dashboard3';


const Pannel = () => {
  return (
    <>
        <Routes>
            <Route path='/' element= {<Dashboard1 />} />
            <Route path='/Dashboard2' element= {<Dashboard2 />} />
            <Route path='/Dashboard3' element= {<Dashboard3 />} />
        </Routes>
    </>
  )
}

export default Pannel;