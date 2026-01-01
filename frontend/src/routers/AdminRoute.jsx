import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = ({children}) => {
  const token = localStorage.getItem('adminToken');
  if(!token) {
    return <Navigate to="/admin-login" replace/>
  }
  // For now, any authenticated user can access admin. In production, check for admin role.
  return children ? children : <Outlet/>;
}

export default AdminRoute