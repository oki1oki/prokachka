import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useConfigStore } from '@/shared/config/store';
import { BASE_COLORS } from '@/shared/config/themes';
import { CatalogPage } from '@/pages/catalog';
import { NotFoundPage } from '@/pages/not-found';
import { RootLayout } from '@/pages/root/ui/root-layout';
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
		],
	},
	{ path: '*', element: <NotFoundPage /> },
]);

export const App = () => {
	const { theme } = useConfigStore();
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--primary',
			BASE_COLORS.find((color) => color.name === theme)?.color || ''
		);
	}, [theme]);

	return <RouterProvider router={router} />;
};
