import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeTable=()=>{

    const [emp,setemp]=useState([]);

    function getEmp(){
        axios.get("http://localhost:3002/employees/")
        .then((res)=>{
            setemp(res.data)
        })
    } 

    function handleDelete(empid){
        axios.delete(`http://localhost:3002/employees/employee/${empid}`)
        .then(()=>{
            getEmp();
        });

    }

    useEffect(()=>{
        getEmp();
    },[])
    return(
        <>
    <Link to="/"><button>AddEmployee</button></Link>
    <br />
    <br />

        <table border="2px">
            <thead>
                <th>EmployeeId</th>
                <th>EmployeeName</th>
                <th>Salary</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                {emp.map((empdata)=>{
                  return(
                    <>
                      <tr>
                        <td>{empdata.empid}</td>
                        <td>{empdata.ename}</td>
                        <td>{empdata.salary}</td>
                        <td><button type="button" onClick={()=>handleDelete(empdata.empid)} >Delete </button></td>
                        <td> <button type="button">Edit</button></td>
                        <td><Link to={`/updateform/${empdata.empid}`}><button>Update</button></Link></td>
                    </tr>
                    </>
                  )
                })}
            </tbody>
        </table>
      </>
    )
}
export default EmployeeTable;