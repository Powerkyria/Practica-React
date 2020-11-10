import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
	const { user } = props;

	const hashUser = Object.keys(user).length > 0;

	const handleLogOut = () => {

		props.logoutRequest({})
	};

	return (
		<header className="header">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hashUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="" />}

					<p>Perfil</p>
				</div>
				<ul>
					{hashUser ? (
						<li>
							<a href="/">{user.name}</a>
						</li>
					) : null}

					{hashUser ? (
						<li>
							<a href="#logout" onClick={handleLogOut}>
								Cerrar Sesión
							</a>
						</li>
					) : (
						<li>
							<Link to="/login">Iniciar Sesión</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
};
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispathToProps = {
	logoutRequest,
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
