import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Fragment>
			<h1>Ini adalah Halaman Home</h1>
			<Link to="/login">
				<button>Ke Halaman Login</button>
			</Link>
		</Fragment>
	)
}

export default Home;