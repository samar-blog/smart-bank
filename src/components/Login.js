import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    function saveData()
{
  let data={username,password}

  fetch("https://bca8-213-230-96-172.in.ngrok.io/api/v1/registrationa", {
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
    <div className="signin">
        <h1>Sign In</h1>
        <input type="text" name="username" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}}  /> <br />
        <input type="password" name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
        <input type="submit" value="Submit" onClick={saveData} className="knopka"/>
        <Link to='/profile'>Sign Up</Link>
        
    </div>
  )
}

export default Login