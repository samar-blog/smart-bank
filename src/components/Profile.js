import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    const[full_name,setFull_name] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[birthday,setBirthday] = useState("");
    const[gender,setGender] = useState("");

    function saveData()
{
  let data={full_name,
            username,
            password,
            birthday,
            gender}
// console.warn(data);
  fetch("http://10.0.118.162:3399/api/v1/registration", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
   
  return (
   <div className='signup'>
     <h1>Sign Up </h1>  
      <input type="text" name="full_name" placeholder='Full Name' value={full_name} onChange={(e)=>{setFull_name(e.target.value)}}  /> <br /> 
      <input type="text" name="username" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}  /> <br />
      <input type="password" name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
      <input type="date" name='birthday' placeholder='Birthday date' value={birthday} onChange={(e)=>{setBirthday(e.target.value)}} /> <br />
      <select name="gender" onChange={(e) => {setGender(e.target.value)}} placeholder='GENDER'>
      <option value="female">Male</option>
      <option value="gender">Female</option>
      </select> <br />
      <input type="submit" value="Submit" onClick={saveData} className="knopka"/>
      <Link to='/login'>Login</Link>
   </div>
  )
}

export default Profile