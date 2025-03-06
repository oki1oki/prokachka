import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useConfigStore } from '@/shared/config/store';
import { BASE_COLORS } from '@/shared/config/themes';
import { mockShopItems } from '@/shared/mock';
import { CatalogPage } from '@/pages/catalog';
import { NotFoundPage } from '@/pages/not-found';
import { ProfilePage } from '@/pages/profile';
import { RootLayout } from '@/pages/root/ui/root-layout';
import { ShopPage } from '@/pages/shop/ui/shop-page';
import { WelcomePage } from '@/pages/welcome/ui/welcome-page';

const initialTheme = useConfigStore.getState().theme;
const primaryColor =
	BASE_COLORS.find((color) => color.name === initialTheme)?.color || '';
document.documentElement.style.setProperty('--primary', primaryColor);

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{ path: '/', element: <WelcomePage /> },
			{ path: '/catalog', element: <CatalogPage /> },
			{
				path: '/shop',
				element: (
					<div className='grid grid-cols-3'>
						{mockShopItems.map((i) => (
							<ShopPage item={i} key={i.id} />
						))}
					</div>
				),
			},
			{
				path: '/profile',
				element: <ProfilePage />,
			},
			{
				path: '/training',
				element: <div className=''>Тренировка</div>,
			},
		],
	},
	{ path: '*', element: <NotFoundPage /> },
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
