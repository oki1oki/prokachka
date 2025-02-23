import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { titlesMap } from '@/shared/config/titles-map';
import ColorPicker from '@/shared/ui/color-picker';

export const RootLayout = () => {
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname;
		console.log(path);
		document.title = `PROКАЧКА | ${titlesMap[path] || ''}`;
	}, [location]);

	return (
		<main className='mx-auto max-w-7xl'>
			<Header />
			<Outlet />
			<p className='text-primary'>ПРиВЕТ</p>
			<p className='text-secondary'>ПРиВЕТ</p>
			<ColorPicker />
		</main>
	);
};
