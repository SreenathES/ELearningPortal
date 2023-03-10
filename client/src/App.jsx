import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import InstructorRegister from "./pages/instructor/InstructorRegister";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import StudentRegister from "./pages/student/StudentRegister";

const routes = createBrowserRouter([
	{
		path: '*',
		element: <Page404 />
	},
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
			},
			{
				path: 'register',
				children: [
					{
						path: 'student',
						element: <StudentRegister />
					},
					{
						path: 'instructor',
						element: <InstructorRegister />
					}
				]
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
