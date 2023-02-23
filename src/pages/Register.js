import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert, Navbar } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    setValues(initialState)
    const currentUser = { email, password };
    console.log(currentUser)
    registerUser({
      currentUser,
      endPoint: 'auth/register',
      alertText: 'User Created',
    });

  };

  

  return (
    <Wrapper className='full-page'>
      <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">vfv
      </Tab>
      <Tab eventKey="profile" title="Profile">
        222222
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        3333333333
      </Tab>
    </Tabs>
      <form className='form' onSubmit={onSubmit}>
        <h3>Register</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {/* {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )} */}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          submit
        </button>
        {/* <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: 'testUser@test.com', password: 'secret' },
              endPoint: 'login',
              alertText: 'Login Successful! Redirecting...',
            });
          }}
        >
          {isLoading ? 'loading...' : 'demo app'}
        </button> */}
        {/* <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p> */}
      </form>
    </Wrapper>
  );
};
export default Register;
