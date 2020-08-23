import React, {
	useState,
	useEffect
} from 'react';
import {
	useHistory
} from 'react-router-dom';

const Login = () => {
	const [userData, setUserData] = useState({
		username: '',
		password: ''
	});
	const history = useHistory();

	useEffect(() => {
		if(localStorage.getItem('isAuthenticated')) {
			return history.push('/dashboard');
		}
	}, []);

	const handleChange = event => {
		setUserData({
			...userData,
			[event.target.name]: [event.target.value]
		});
	}

	const handleSubmit = event => {
		event.preventDefault();

		if(userData.username === '' || userData.password === '') {
			return alert('Pastikan semua field sudah diisi!');
		}

		localStorage.setItem('isAuthenticated', true)
		localStorage.setItem('user', JSON.stringify(userData));

		history.push('/dashboard');
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" name="username" onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input id="password" type="password" name="password" onChange={handleChange} />
			</div>
			<button type="submit">Login</button>
		</form>
	)
}

export default Login;