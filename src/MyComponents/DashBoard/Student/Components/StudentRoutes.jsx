/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {
  getHistory,
  getMessage,
} from '../../../../context/actions/notAndMessage';
import {
  getProgress,
  getUsersCourse,
} from '../../../../context/actions/userActions';
import { SideNav } from './SideNav';
import { TopBar } from './TopBar';

const StudentRoutes = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem('jwt'));
  const progress = useSelector((state) => state.progress.progress);
  const courses = useSelector((state) => state.progress.course);
  const messages = useSelector((state) => state.notification.messages);
  const activity = useSelector((state) => state.notification.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.user?.role === 1) {
      dispatch(getProgress());
      dispatch(getUsersCourse());
      dispatch(getHistory());
      dispatch(getMessage());
    }
  }, [dispatch, user?.user?.role]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {user?.isAuth === 'false' ||
          (user?.isAuth === 'true' && user?.user?.role !== 1) ||
          !token ? (
            <Redirect
              to={{
                pathname: '/dashboard/student/signup',
                state: { from: props.location },
              }}
            />
          ) : (
            <div className="w-full flex flew-col md:flex-row ">
              <div className="bg-red-1 shadow-button-inner w-2/12">
                <SideNav />
              </div>
              <div className=" w-10/12 md:w-full bg-dashboard-bg">
                <TopBar />
                <Component {...props} />
              </div>
            </div>
          )}
        </>
      )}
    />
  );
};

export default StudentRoutes;
