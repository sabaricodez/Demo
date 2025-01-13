import "./styles.css";
import React,{useState} from 'react'
import Input from './Input'
export default Login=({ onLoginSuccess })=> {

const [credentials,setCredentials]=useState(
    {
    Username:'',
    Password:''
  }
);

const handleChange=(name,text)=>{
setCredentials(prev=>{
  let handler={...prev}
  handler[`${name}`]=text
  return handler
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(credentials,onLoginSuccess)
    if (credentials.Username === 'Admin' && credentials.Password === 'Admin') {
      alert("Login Successful!!")
      onLoginSuccess();
    } else {
      alert("Invalid Credentials")
    }
}

  return (
    <div style={{width:'100vw',height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
      <div style={{width:'60vw', gap:10,display:'flex',flexDirection:'column',backgroundColor:'#f4f4f4',borderRadius:8,overflow:'hidden',padding:'15px',maxWidth:360}}>
      <Input label="Username" value={credentials.username} onChangeText={handleChange}/>
      <Input label="Password" type="password" value={credentials.password} onChangeText={handleChange}/>
      <button style={{marginTop:'30px',height:30,backgroundColor:'Orange',borderRadius:5}} type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
