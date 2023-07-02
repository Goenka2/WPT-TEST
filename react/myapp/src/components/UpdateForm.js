// import axios from "axios";
// import React,{useEffect,useState} from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateForm=()=>{

// const [info,setInfo]=useState([{empid:'',ename:'',salary:'0'}]);
// //const params=useParams();
// const history=useNavigate();


// const handleUpdate=()=>{
//     axios.put(`http://localhost:3002/employees/employee/${info.empid}`,info)
//     history("/employeetable");
// }



// return(
//     <>
//     <input type="text" name="empid" id="empid" value={info.empid} disabled />
//     <input type="text" name="ename" id="ename" value={info.ename} onChange={(e)=>setInfo({...info,ename:e.target.value})} />
//     <input type="text" name="salary" id="salary" value={info.salary} onChange={(e)=>setInfo({...info,salary:e.target.value})} />

//     <button type="button" onClick={handleUpdate}></button>
//     </>
// )

// }
// export default UpdateForm