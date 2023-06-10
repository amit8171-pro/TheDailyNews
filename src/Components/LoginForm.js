import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
   <>
      <div className='container d-flex justify-content-center'>
      <div className="card login-card">
  
    
    <form className='p-3'>
    <h5 className="card-title">Login</h5>
  <div className="mb-3">
    <label for="exampleInputUser" class="form-label ">Username</label>
    <input type="email" class="form-control" id="exampleInputUser" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-danger">Log In</button>
  <hr></hr>
  <Link to={'/'} className='forgetpass text-decoration-none text-body-tertiary px-2'><p className='d-inline-block'>Forgot your password?</p></Link>
  <Link to={'/'} className='forgetemail text-decoration-none text-body-tertiary'><p className='d-inline-block'>Forgot your username?</p></Link>
  <Link to={'/'} className='creatbtn text-decoration-none '><p className='bg-dark py-2 text-center text-light'>Create an account</p></Link>
</form>
   
 
</div>
      </div>

   </>
  )
}
