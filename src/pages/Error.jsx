import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if(error.status===404){
    return(
      <Wrapper>
        <div>
          <img src={img} alt='not found'/>
          <h3>Ohh! Page not found</h3>
          <p>We cannot seem to find the page you are looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <div>
      <h3>something went wrong</h3>
    <Link to= '/dashboard'> Back to home</Link>
    </div>
  )
}

export default Error
