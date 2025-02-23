'use client';

import { BicepsFlexed, Dumbbell, Layers, Store } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/shared/utils/tw-merge';

export const Header = () => {
	const { pathname } = useLocation();

	return (
		<>
			<header className='bg-background sticky top-0 z-50 w-full border-b dark:border-black'>
				<div className='mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4'>
					<Link to='/' className='flex items-center gap-2'>
						<BicepsFlexed size={36} />
						<h2 className='text-2xl font-bold'>
							<span className='text-primary'>PRO</span>КАЧКА
						</h2>
					</Link>
					<nav className='hidden sm:flex sm:items-center sm:gap-6'>
						<Link
							to='/catalog'
							className={cn(
								'hover:text-primary transition-colors',
								pathname === '/catalog' && 'text-primary'
							)}
						>
							Каталог упражнений
						</Link>
						<Link
							to='/profile'
							className={cn(
								'hover:text-primary transition-colors',
								pathname === '/profile' && 'text-primary'
							)}
						>
							Тренировка
						</Link>
						<Link
							to='/store'
							className={cn(
								'hover:text-primary transition-colors',
								pathname === '/store' && 'text-primary'
							)}
						>
							Магазин
						</Link>
					</nav>
				</div>
			</header>

			{/* Навигация на мобильных устройствах */}
			<nav className='bg-background/80 fixed right-4 bottom-4 left-4 z-50 flex h-16 w-auto items-center justify-around rounded-full border-t border-gray-200 shadow-lg backdrop-blur-xl sm:hidden dark:border-gray-800'>
				<Link
					to='/catalog'
					className={cn(
						'flex transform flex-col items-center justify-center gap-1 px-4 py-2 transition-transform hover:scale-110',
						pathname === '/catalog'
							? 'text-primary'
							: 'text-gray-400'
					)}
				>
					<Layers size={24} />
					<span className='text-xs'>Каталог</span>
				</Link>
				<Link
					to='/profile'
					className={cn(
						'flex transform flex-col items-center justify-center gap-1 px-4 py-2 transition-transform hover:scale-110',
						pathname === '/profile'
							? 'text-primary'
							: 'text-gray-400'
					)}
				>
					<Dumbbell size={24} />
					<span className='text-xs'>Тренировка</span>
				</Link>
				<Link
					to='/store'
					className={cn(
						'flex transform flex-col items-center justify-center gap-1 px-4 py-2 transition-transform hover:scale-110',
						pathname === '/store' ? 'text-primary' : 'text-gray-400'
					)}
				>
					<Store size={24} />
					<span className='text-xs'>Магазин</span>
				</Link>
			</nav>
		</>
	);
};
