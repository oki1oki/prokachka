import { Dumbbell, Layers, LucideIcon, Store } from 'lucide-react';

interface SiteLink {
	title: string;
	href: string;
	icon: LucideIcon;
}

export const siteLinks: SiteLink[] = [
	{
		title: 'Упражнения',
		href: '/catalog',
		icon: Layers,
	},
	{
		title: 'Тренировка',
		href: '/training',
		icon: Dumbbell,
	},
	{
		title: 'Магазин',
		href: '/shop',
		icon: Store,
	},
];
