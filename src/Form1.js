import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function Form1() {
  const [name,setName]=useState("");
  const [interest,setInterest]=useState("");
  const [TnC,setTnC]=useState(false);
  const handleData=(e)=>{
e.preventDefault()
console.log("Data is",name,interest,TnC)
  }
  return (
    <div className="App">
     <form onSubmit={handleData}>
      <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
      <select name="" onChange={(e)=>{setInterest(e.target.value)}}>
        <option value="">Marvel</option>
       <option value="">Dc</option>
      </select>
      <br /><br />
      <input type="checkbox" onChange={(e)=>{setTnC(e.target.checked)}}/><span>Agrre with terms and conditions</span><br /><br />
      <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default Form1;
