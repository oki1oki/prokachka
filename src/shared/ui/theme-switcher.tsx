import { useEffect } from 'react';
import { useConfigStore } from '@/shared/config/store';

export function ThemeSwitcher() {
	const { theme } = useConfigStore();

	useEffect(() => {
		document.body.classList.forEach((className) => {
			if (className.match(/^theme.*/)) {
				document.body.classList.remove(className);
			}
		});

		if (theme) {
			return document.body.classList.add(`theme-${theme}`);
		}
	}, [theme]);

	return null;
}
