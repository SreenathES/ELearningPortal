import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const routes = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'login',
				element: <Login />
			}
		]
	}
]);

function App() {
	return (
		<RouterProvider router={routes}></RouterProvider>
	);
}

export default App;
