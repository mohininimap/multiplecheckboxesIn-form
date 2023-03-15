import React, { useEffect,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const userData=[{name:"Jeevan"},{name:"Manish"},{name:"Prince"},{name:"Aarti"},{name:"rahul"}]

const Form2multicheck = () => {
    const [users,setUsers]=useState([])

  useEffect(()=>{
setUsers(userData);
  },[]);

  const handleChange=(e)=>{
    const {name,checked}=e.target;
if(name==="allSelect"){
    let tempUser=users.map((user)=>{return {...user,isChecked:checked}})
    setUsers(tempUser)

}else{
    let tempUser=users.map((user)=>user.name===name?{...user,isChecked:checked}:user);
    setUsers(tempUser);
}

  }
  return (
    <>
    <div className='container my-4' style={{width:400}}>
  <form action="form">
    <h3>Select Users</h3>

    <div className='form-check'>
   <input type="checkbox" className='form-check-input'

    name="allSelect"

    checked={users.filter((user)=>user?.isChecked !==true).length < 1}

    onChange={handleChange}
    
    />
   <label className='form-check-label ms-2'>All Select</label>
    </div>

     {users.map((user)=>(
        <div className='form-check'>

   <input type="checkbox"
   checked={user?.isChecked || false}
   name={user.name}
   onChange={handleChange}
   className='form-check-input'
 
   />
   <label className='form-check-label ms-2'>{user.name}</label>
    </div>
     ))}
 

    

   

  </form>
    </div>
    </>
  )
}

export default Form2multicheck