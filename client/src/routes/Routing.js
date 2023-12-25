import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Schools from '../pages/Schools';
import Create from '../pages/Create';
import UserLogin from '../pages/userLogin'; // Ensure correct PascalCase for component names
import Signup from '../pages/signup';
import Academies from '../pages/Academies';
import Academic from '../pages/createAcademicYear';
import Classes from '../pages/Classes';
import Class from '../pages/createClass';
import Teachers from '../pages/Teachers';
import Students from '../pages/Students';
const Routing = () => {
    return (
        <>

      <Router>
        <Dashboard>
        <Routes>
          <Route path="/login" element={ <UserLogin />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/schools" element={ <Schools />}/>
          <Route path="/createSchool" element={<Create />} />
          <Route path="/academic" element={<Academic/>} />
          <Route path="/academies" element={<Academies/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/class" element={<Class/>} />
          <Route path="/teacher" element={<Teachers/>} />
          <Route path="/student" element={<Students/>} />
          </Routes>
        </Dashboard>
      </Router>
        </>
    );
}
export default Routing;