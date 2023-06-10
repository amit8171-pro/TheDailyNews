import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
 <>
  <section className="nav-comp container">
    <div className=''>
      
           
            <nav className="navbar navbar-expand-lg nav-component bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-house-door-fill"></i></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Business'}>Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Entertainment'}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Health'}>Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Science'}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Sports'}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Technology'}>Technology</Link>
        </li>
  
     
      </ul>

    </div>
    <ul className="list-inline m-0 p-0 social-icons">
            <Link to='https://www.facebook.com'><li className="list-inline-item "><i className="bi bi-rss-fill"></i></li></Link>
            <Link to='https://www.facebook.com'><li className="list-inline-item"><i className="bi bi-facebook"></i></li></Link>
            <Link to='https://www.twitter.com'><li className="list-inline-item"><i className="bi bi-twitter"></i></li></Link>
            <Link to='https://www.gmail.com'><li className="list-inline-item"><i className="bi bi-google"></i></li></Link>
            <Link to='https://www.linkedin.com'><li className="list-inline-item"><i className="bi bi-linkedin"></i></li></Link>
  
  
  
  
  
</ul>
  </div>

</nav>

            </div>
       
      
    
  </section>

 </>
  )
}
