import React from 'react';
import Dashboard from './components/Dashboard';
import Routing from './routes/Routing';
import UserLogin from './pages/userLogin';
const App = () => {
const token = localStorage.getItem('token');
console.log("Token is here",token)
  return (
   <>
   
    <Routing/>
   </>
  );
};
export default App;