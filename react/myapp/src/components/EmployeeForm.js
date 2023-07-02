import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
const EmployeeForm=()=>{
    const [empid,setid]=useState("")
    const [ename,setname]=useState("")
    const [salary,setsalary]=useState("")
    const history=useNavigate();
    const handleSubmit=()=>{
        // e.preventDefault();
        axios.post(`http://localhost:3002/employees/employee/${empid}`,{
            
                empid:empid,
                ename: ename,
                salary:salary
            })
        .then(()=>{
            history("/employeetable")
         });
    };
return(
    <Fragment>
        Enter id:<input type="text" name="empid" id="empid" onChange={(e)=>setid(e.target.value)} />
       Enter name: <input type="text" name="ename" id="ename" onChange={(e)=>setname(e.target.value)} />
        Enter salary: <input type="text" name="salary" id="salary" onChange={(e)=>setsalary(e.target.value)} />
        <button type="button" name="btn" id="btn" onClick={handleSubmit}>Add</button>
        {/* <button type="button" name></button> */}
</Fragment>
)
}
export default EmployeeForm