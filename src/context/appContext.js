import React, { useReducer, useContext, useEffect } from 'react';

import reducer from './reducer';
import axios from 'axios';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  
} from './actions';



const initialState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  showSidebar: false,
  isEditing: false,
  jobTypeOptions: ['full-time', 'part-time', 'remote'],
  jobType: 'full-time',
  statusOptions: ['permanent', 'retired'],
  status: 'pending',
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  token: '',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'], 
};




const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });
  // request

  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const addUserToLocalStorage = (token) => {
    localStorage.setItem('token', token)
  }
  
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
  }

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post( `${endPoint}`,
      currentUser)
      console.log(response)
      const {user} = currentUser.email
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user
        },
      })
  
      // will add later
      // addUserToLocalStorage({
      //   user,
      //   token,
      //   location,
      // })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response },
      })
    }
    clearAlert()
  }

  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const response = await axios.post(
        `${endPoint}`,
        currentUser)
      // const { token } = response.headers;
      const token = "token"
      const user = currentUser.email
      console.log(user)

      console.log(response.headers)
  
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {token, user},
      })
  
      addUserToLocalStorage(token)

    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response },
      })
    }
    clearAlert()
  }


  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `${endPoint}`,
        currentUser
      );

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  // const login = async ({ currentUser, endPoint, alertText }) => {
  //   dispatch({ type: SETUP_USER_BEGIN });
  //   try {
  //     const response = await axios.post(
  //       `${endPoint}`,
  //       currentUser
  //     );

  //     console.log(response)
  //     const { token } = reducer.headers.authorization;
  //     console.log(response.headers)
  //     dispatch({
  //       type: SETUP_USER_SUCCESS,
  //       payload: { token },
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: SETUP_USER_ERROR,
  //       payload: { msg: error.response.data.msg },
  //     });
  //   }
  //   clearAlert();
  // };
  

  const logoutUser = async () => {
    // await authFetch.get('/auth/logout');
    // dispatch({ type: LOGOUT_USER });
  };
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      const { user, location } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const createJob = async () => {
    // dispatch({ type: CREATE_JOB_BEGIN });
    // try {
    //   const { position, company, jobLocation, jobType, status } = state;
    //   await authFetch.post('/jobs', {
    //     position,
    //     company,
    //     jobLocation,
    //     jobType,
    //     status,
    //   });
    //   dispatch({ type: CREATE_JOB_SUCCESS });
    //   dispatch({ type: CLEAR_VALUES });
    // } catch (error) {
    //   if (error.response.status === 401) return;
    //   dispatch({
    //     type: CREATE_JOB_ERROR,
    //     payload: { msg: error.response.data.msg },
    //   });
    // }
    // clearAlert();
  };

  const getJobs = async () => {
    // const { page, search, searchStatus, searchType, sort } = state;

    // let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    // if (search) {
    //   url = url + `&search=${search}`;
    // }
    // dispatch({ type: GET_JOBS_BEGIN });
    // try {
    //   const { data } = await authFetch(url);
    //   const { jobs, totalJobs, numOfPages } = data;
    //   dispatch({
    //     type: GET_JOBS_SUCCESS,
    //     payload: {
    //       jobs,
    //       totalJobs,
    //       numOfPages,
    //     },
    //   });
    // } catch (error) {
    //   logoutUser();
    // }
    // clearAlert();
  };

  const setEditJob = (id) => {
    // dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };
  const editJob = async () => {
    // dispatch({ type: EDIT_JOB_BEGIN });

    // try {
    //   const { position, company, jobLocation, jobType, status } = state;
    //   await authFetch.patch(`/jobs/${state.editJobId}`, {
    //     company,
    //     position,
    //     jobLocation,
    //     jobType,
    //     status,
    //   });
    //   dispatch({ type: EDIT_JOB_SUCCESS });
    //   dispatch({ type: CLEAR_VALUES });
    // } catch (error) {
    //   if (error.response.status === 401) return;
    //   dispatch({
    //     type: EDIT_JOB_ERROR,
    //     payload: { msg: error.response.data.msg },
    //   });
    // }
    // clearAlert();
  };
  const deleteJob = async (jobId) => {
    // dispatch({ type: DELETE_JOB_BEGIN });
    // try {
    //   await authFetch.delete(`/jobs/${jobId}`);
    //   getJobs();
    // } catch (error) {
    //   if (error.response.status === 401) return;
    //   dispatch({
    //     type: DELETE_JOB_ERROR,
    //     payload: { msg: error.response.data.msg },
    //   });
    // }
    // clearAlert();
  };
  const showStats = async () => {
    // dispatch({ type: SHOW_STATS_BEGIN });
    // try {
    //   const { data } = await authFetch('/jobs/stats');
    //   dispatch({
    //     type: SHOW_STATS_SUCCESS,
    //     payload: {
    //       stats: data.defaultStats,
    //       monthlyApplications: data.monthlyApplications,
    //     },
    //   });
    // } catch (error) {
    //   logoutUser();
    // }
    // clearAlert();
  };
  const clearFilters = () => {
    // dispatch({ type: CLEAR_FILTERS });
  };
  const changePage = (page) => {
    // dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const getCurrentUser = async () => {
    // dispatch({ type: GET_CURRENT_USER_BEGIN });
    // try {
    //   const { data } = await authFetch('/auth/getCurrentUser');
    //   const { user, location } = data;

    //   dispatch({
    //     type: GET_CURRENT_USER_SUCCESS,
    //     payload: { user, location },
    //   });
    // } catch (error) {
    //   if (error.response.status === 401) return;
    //   logoutUser();
    // }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        showStats,
        clearFilters,
        changePage,
        loginUser,
        registerUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };


// CREATE_JOB_BEGIN,
//   CREATE_JOB_SUCCESS,
//   CREATE_JOB_ERROR,
//   GET_JOBS_BEGIN,
//   GET_JOBS_SUCCESS,
//   SET_EDIT_JOB,
//   DELETE_JOB_BEGIN,
//   DELETE_JOB_ERROR,
//   EDIT_JOB_BEGIN,
//   EDIT_JOB_SUCCESS,
//   EDIT_JOB_ERROR,
//   SHOW_STATS_BEGIN,
//   SHOW_STATS_SUCCESS,
//   CLEAR_FILTERS,
//   CHANGE_PAGE,
//   GET_CURRENT_USER_BEGIN,
//   GET_CURRENT_USER_SUCCESS,