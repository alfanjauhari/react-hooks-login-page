import React from 'react';
import {
	Redirect,
	Route
} from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
	return (
		<Route render={props => localStorage.getItem('isAuthenticated') ? children : <Redirect to="/login" />} />
	)
}

export default ProtectedRoute;