import HomePage from './../pages/HomePage';
import ImportPage from './../pages/ImportPage';
import LoginPage from './../pages/LoginPage';
import Page404 from './../pages/Page404';

const mainsRoutes = {
	id: 'Trang chủ',
	path: '/',
	exact: true,
	children: [
		{
			path: '/',
			name: 'Trang chủ',
			component: HomePage,
		},
		{
			path: '/import',
			name: 'Import',
			component: ImportPage,
		},
	],
};

const authRoutes = {
	id: 'Auth',
	path: '/auth',
	children: [
		{
			path: '/auth/login',
			name: 'Sign In',
			component: LoginPage,
		},
		{
			path: '/auth/404',
			name: '404 Page',
			component: Page404,
		},
	],
};

export const main = [mainsRoutes];

export const auth = [authRoutes];

export default [mainsRoutes];
