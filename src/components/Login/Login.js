import React from 'react'

const Login = () => {
  const handleOnSubmit = (e) =>{
    //Prevent the page from reloading
    e.preventDefault()

    console.log('Submit clicked')
  }
  return (
    <div style={{textAlign: 'center'}}>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="checkbox" name="checkbox" id="" />
        <label htmlFor="checkbox">New user?</label>
        <br />
        <input type="email" name="email" placeholder='Enter your email' id="email" />
        <br />
        <input type="password" name="password" placeholder='Enter your password' id="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login