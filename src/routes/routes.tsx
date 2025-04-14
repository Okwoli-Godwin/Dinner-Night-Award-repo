import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from '../components';
import Homepage from '../pages/Homepage';
import Ticket from '../pages/Ticket';
import SignIn from '../pages/SignIn';
import DashboardLayout from '../components/layout/DashboardLayout';
import TicketSold from '../components/Dashbord-component/TicketSold';
import Gallery from '../pages/Gallery';
import PaymentConfirmation from '../pages/PaymentConfirmation';
import SetBusinessAdvert from '../components/Dashbord-component/SetBusinnessAdvert';
import Download from '../components/Download_setion/Download';
import CreateCategory from '../components/voteComponent/CreateCategory';
import ContestantList from '../components/voteComponent/ContestantList';
import CategoryList from '../components/voteComponent/CategoryList';
import SeeAllVotes from '../components/voteComponent/SeeAllVotes';
import UploadImage from '../components/voteComponent/UploadImage';
import VisitorStats from '../components/Dashbord-component/VisitorStats';

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
		path: '/download/:imageUrl',
		element: <Download />,
	},

	{
		path: '/vote',
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
				path: 'ticket-sold',
				element: <TicketSold />,
			},
			{
				path: 'setBusiness',
				element: <SetBusinessAdvert />,
			},
			{
				path: 'visitor-stats',
				element: <VisitorStats />,
			},

			{
				path: 'vote/createCategory',
				element: <CreateCategory />,
			},
			{
				path: 'vote/seeAllVotes',
				element: <SeeAllVotes />,
			},
			{
				path: 'uploadImage',
				element: <UploadImage />,
			},
		],
	},
]);
