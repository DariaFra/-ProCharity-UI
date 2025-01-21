import login  from './LoginPage';
import main  from './MainPage';
import register from './RegisterPage';

export const routes = [
	// { index: true, element: <p>Hello world!</p> },
	{ index: true, ...main},
	{ path: '/login', ...login},
	{ path: '/register', ...register}
];
