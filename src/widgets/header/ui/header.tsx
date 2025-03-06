import { BicepsFlexed } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/shared/utils/tw-merge';
import { siteLinks } from '../model/links';

export const Header = () => {
	const { pathname } = useLocation();

	return (
		<header className='bg-background sticky top-0 z-50 border-b'>
			<div className='max-w-8xl mx-auto flex h-16 max-h-auto items-center justify-between px-2 md:px-6'>
				<Link to='/' className='flex items-center gap-2'>
					<BicepsFlexed size={36} />
					<h2 className='text-2xl font-bold'>
						<span className='text-primary'>PRO</span>КАЧКА
					</h2>
				</Link>
				<nav className='bg-background/80 sm:bg-background right-2 bottom-2 left-2 z-10 flex items-center justify-around border-gray-800 not-sm:fixed not-sm:rounded-full not-sm:border not-sm:shadow-lg not-sm:backdrop-blur-[6px] sm:h-full sm:gap-6 dark:border-gray-700'>
					{siteLinks.map((link) => (
						<Link
							to={link.href}
							className={cn(
								'hover:text-primary flex h-full flex-col items-center justify-center gap-1 rounded-xl not-sm:px-2 not-sm:py-3',
								'not-sm:text-gray-500',
								pathname === link.href && 'text-primary!'
							)}
							key={link.href}
						>
							<link.icon size={24} className='sm:hidden' />
							<span className='text-center not-sm:text-xs'>
								{link.title}
							</span>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};
