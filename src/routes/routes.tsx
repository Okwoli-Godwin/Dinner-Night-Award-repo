import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from '../components';
import Homepage from '../pages/Homepage';
import Ticket from '../pages/Ticket';
import SignIn from '../pages/SignIn';
import DashboardLayout from '../components/layout/DashboardLayout';
import TicketSold from '../components/Dashbord-component/TicketSold';
import Gallery from '../pages/Gallery';
import PaymentConfirmation from '../pages/PaymentConfirmation';
import SetBusiness from '../components/Gallery-components/Dashbord-component/setBusiness/SetBusiness';

import CreateCategory from '../components/voteComponent/CreateCategory';
import ContestantList from '../components/voteComponent/ContestantList';
import CategoryList from '../components/voteComponent/CategoryList';

export const Element = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
			{
				path: '/get-ticket',
				element: <Ticket />,
			},
			{
				path: '/payment-confirmation',
				element: <PaymentConfirmation />,
			},
		],
	},
	{
		path: '/signIn',
		element: <SignIn />,
	},
	{
		path: '/vote',
		element: <CreateCategory />,
	},
	{
		path: '/vote/categorylist',
		element: <CategoryList />,
	},
	{
		path: '/vote/contestantslist/:categoryId',
		element: <ContestantList />,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <TicketSold />,
			},
			{
				path: '/dashboard/setBusiness',
				element: <SetBusiness />,
			},
		],
	},
]);
