import React, { useState } from 'react'
import "./Login.scss"
import newRequest from '../../utils/newRequest'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const res = await newRequest.post("/auth/login", {
        username,
        password
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
      console.log(res.data)
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder='joedou' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input 
          type="password" 
          name="password" 
          onChange={e=>setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        <span>{error && error}</span>
      </form>
    </div>
  )
}

export default Login