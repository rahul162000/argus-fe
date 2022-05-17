/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem('jwt'));
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {user?.isAuth === 'false' ||
          (user?.isAuth === 'true' && user?.user?.role !== 2) ||
          !token ? (
            <Redirect
              to={{
                pathname: '/dashboard/admin/login',
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )}
        </>
      )}
    />
  );
};

export default AdminRoute;
