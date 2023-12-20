import { useState } from 'react'
import axios from 'axios'
import Profiles from './profiles';
import '../css/index.css'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [gotData,setGotData] = useState(true);
  let [credentials,setCredentials] = useState({name: "",password:""});
  let [userData,setUserData] = useState({})
  let handleChange=(e) =>{
          var key = e.target.name;
          var value = e.target.value;
          setCredentials({...credentials, [key] :value})
        }


let server = async (e) => {
  e.preventDefault();
  await axios.post('http://localhost:3030/api/v1/login', { data: credentials })
  .then((response) => {
    console.log()
       setGotData(false);
       setUserData(response);
  })

}

   return ( gotData ?
    <>
    <section className='loginBody'>
    <div className="container">
     <h2 style={{padding:"10px 0px 20px 0",fontFamily: "cursive"}}>Login With Your USN</h2>
    <form>
      <label htmlFor="name" className='loginLabel'>USN:</label>
      <input type="text" id="name" name="name" className='loginInput' onChange={handleChange} required/>
      <label for="password" className='loginLabel'>Password:</label>
      <input type="password" id="password" name="password" className='loginInput' onChange={handleChange} required/>
      <button type="submit" className='loginBtn' onClick={()=>navigate("/login/userprofile")} >Login</button>
    </form>
  </div>
  </section>
    </> : <> <Profiles userData={userData}/></>
  )
}

export default Login
