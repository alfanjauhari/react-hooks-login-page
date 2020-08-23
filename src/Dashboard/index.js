import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
	const history = useHistory();

	const logout = () => {
		localStorage.removeItem('isAuthenticated')
		localStorage.removeItem('user');

		return history.push('/login');
	}

	return (
		<Fragment>
			<h1>Selamat datang di dashboard {JSON.parse(localStorage.getItem('user')).username}</h1>
			<button onClick={logout}>Logout</button>
		</Fragment>
	)
}

export default Dashboard;