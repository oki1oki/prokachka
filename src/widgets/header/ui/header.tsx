import { BicepsFlexed } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAccountStore } from '@/entities/account';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { cn } from '@/shared/utils/tw-merge';
import { siteLinks } from '../model/links';

// ' sm:bg-background right-2 bottom-2 left-2 z-10 flex items-center justify-around border-gray-800 not-sm:fixed not-sm:rounded-full not-sm:border not-sm:shadow-lg not-sm:backdrop-blur-[6px] sm:h-full sm:gap-6 dark:border-gray-700'

export const Header = () => {
	const { pathname } = useLocation();
	const account = useAccountStore((state) => state.account);

	return (
		<header className='bg-background sticky top-0 z-50 border-b'>
			<div className='max-w-8xl mx-auto flex h-16 max-h-auto items-center justify-between px-2 md:px-6'>
				<Link to='/' className='flex items-center gap-2'>
					<BicepsFlexed size={36} />
					<h2 className='text-2xl font-bold'>
						<span className='text-primary'>PRO</span>КАЧКА
					</h2>
				</Link>
				<nav className='flex items-center gap-6'>
					<div
						className={cn(
							'sm:bg-background flex items-center gap-6 sm:h-full',
							'not-sm:bg-background/80 right-2 bottom-2 left-2 justify-around not-sm:fixed not-sm:rounded-full not-sm:border-2 not-sm:shadow-lg not-sm:backdrop-blur-[6px]',
							'border-gray-300 dark:border-gray-800'
						)}
					>
						{siteLinks.map((link) => (
							<Link
								to={link.href}
								className={cn(
									'hover:text-primary h-full justify-center gap-1',
									'flex flex-col items-center not-sm:px-2 not-sm:py-3 not-sm:text-gray-500',
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
					</div>
					<Link to='/profile'>
						<Avatar>
							<AvatarImage />
							<AvatarFallback>
								{account?.profile?.username[0]}
							</AvatarFallback>
						</Avatar>
					</Link>
				</nav>
			</div>
		</header>
	);
};
