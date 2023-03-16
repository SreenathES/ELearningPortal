import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminLayout from "./layouts/AdminLayout";
import HomeLayout from "./layouts/HomeLayout";
import InstructorLayout from "./layouts/InstructorLayout";
import StudentLayout from "./layouts/StudentLayout";
import AdminHome from "./pages/admin/AdminHome";
import Home from "./pages/Home";
import InstructorHome from "./pages/instructor/InstructorHome";
import InstructorRegister from "./pages/instructor/InstructorRegister";
import Login from "./pages/Login";
import OtpPage from "./pages/OtpPage";
import Page404 from "./pages/Page404";
import StudentHome from "./pages/student/StudentHome";
import StudentRegister from "./pages/student/StudentRegister";
import UnauthorizedAccess from "./pages/UnauthorizedAccess";

const isLoggedIn = 'true';

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
	},
	{
		path: 'otp',
		element: <OtpPage />
	},
	{
		path: 'admin',
		element: <ProtectedRoutes isLoggedIn={isLoggedIn} userRole='admin'><AdminLayout /></ProtectedRoutes>,
		children: [
			{
				path: '',
				element: <AdminHome />
			}
		]
	},
	{
		path: 'student',
		element: <ProtectedRoutes isLoggedIn={isLoggedIn} userRole='student'><StudentLayout /></ProtectedRoutes>,
		children: [
			{
				path: '',
				element: <StudentHome />
			}
		]
	},
	{
		path: 'instructor',
		element: <ProtectedRoutes isLoggedIn={isLoggedIn} userRole='instructor'><InstructorLayout /></ProtectedRoutes>,
		children: [
			{
				path: '',
				element: <InstructorHome />
			}
		]
	},
	{
		path: 'unauthorized',
		element: <UnauthorizedAccess />
	}
]);

function App() {
	return (
		<RouterProvider router={routes}></RouterProvider>
	);
}

export default App;
