import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import UpdateForm from './components/UpdateForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeForm/>}></Route>
        <Route path="/employeetable" element={<EmployeeTable/>}></Route>
        {/* <Route> path="/updateform/:empid" element={<UpdateForm/>}</Route> */}
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
