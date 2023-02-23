import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Learn <span>Management</span> System
            </h1>
            <p>
            A Learning Management System (LMS) is a software 
            that helps create, manage and deliver digital learning 
            content. It streamlines the training process and 
            provides tools for course creation, user tracking,
             and assessments. It makes building engaging and 
             interactive learning experiences easy and effective. 
             Try our platform to experience the benefits of a 
             comprehensive and user-friendly LMS.
            </p>
            <Link to='/login' className='btn btn-hero'>
              Login
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
