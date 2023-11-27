import React from 'react'

function Login() {
  return (
    <section className='loginBody'>
    <div className="container">
     <h2>Login With Your USN</h2>
    <form action="">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
      <button type="submit" className='loginBtn'>Login</button>
    </form>
  </div>
  </section>
  )
}

export default Login
