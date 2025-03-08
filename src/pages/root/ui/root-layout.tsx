import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { useConfigStore } from '@/shared/config/store';
import { BASE_COLORS } from '@/shared/config/themes';
import { titlesMap } from '@/shared/config/titles-map';
import ColorPicker from '@/shared/ui/color-picker';
import { ModeToggle } from '@/shared/ui/mode-toggle';

export const RootLayout = () => {
	const location = useLocation();
	const { theme, mode } = useConfigStore();

	useEffect(() => {
		const path = location.pathname;
		document.title = `PROКАЧКА | ${titlesMap[path] || ''}`;
	}, [location]);

	useEffect(() => {
		document.documentElement.style.setProperty(
			'--primary',
			BASE_COLORS.find((color) => color.name === theme)?.color || ''
		);
		document.documentElement.className = '';

		if (mode === 'system') {
			const isDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;

			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.add('light');
			}
		} else {
			document.documentElement.classList.add(mode);
		}
	}, [theme, mode]);

	return (
		<div className='min-h-screen'>
			<Header />
			<main className='max-w-8xl mx-auto px-2 md:px-6'>
				<ModeToggle />
				<Outlet />
				<p className='text-primary'>ПРиВЕТ</p>
				<p className='text-secondary'>ПРиВЕТ</p>
				<ColorPicker />
			</main>
		</div>
	);
};
