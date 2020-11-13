import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { main as mainRoutes, auth as authRoutes } from './index';

import MainLayout from './../layouts/MainLayout';
import AuthLayout from './../layouts/AuthLayout';
import Page404 from './../pages/Page404';

let token = localStorage.getItem('token');

const childRoutes = (Layout, routes, isAuthed) => {
	console.log("Vào routes");
	return routes.map(({ children, path, component: Component }, index) =>
		children ? (
			// Route item with children
			children.map(({ path, component: Component }, index) => (
				<Route
					key={index}
					path={path}
					exact
					render={(props) =>
						isAuthed ? (
							token ? (
								<Layout>
									<Component {...props} />
								</Layout>
							) : (
								<Redirect
									to={{
										pathname: '/auth/login',
										state: { from: props.location },
									}}
								/>
							)
						) : (
							<Layout>
								<Component {...props} />
							</Layout>
						)
					}
				/>
			))
		) : (
			// Route item without children
			<Route
				key={index}
				path={path}
				exact
				render={(props) =>
					isAuthed ? (
						token ? (
							<Layout>
								<Component {...props} />
							</Layout>
						) : (
							<Redirect
								to={{
									pathname: '/auth/login',
									state: { from: props.location },
								}}
							/>
						)
					) : (
						<Layout>
							<Component {...props} />
						</Layout>
					)
				}
			/>
		)
	);
};

const Routes = () => {
	return (
		<Router>
			<Switch>
				{childRoutes(MainLayout, mainRoutes, true)}
				{childRoutes(AuthLayout, authRoutes, false)}
				<Route
					render={() => (
						<AuthLayout>
							<Page404 />
						</AuthLayout>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default Routes;
