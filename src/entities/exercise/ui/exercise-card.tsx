import { Heart, Trash2 } from 'lucide-react';
import { Exercise, useExerciseStore } from '@/entities/exercise';
import { Badge } from '@/shared/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card';
import { cn } from '@/shared/utils/tw-merge';
import { difficultColors } from '../model/models';

interface ExerciseCardProps {
	exercise: Exercise;
	isFavorite?: boolean;
	toggleFavorite: () => void;
	onClick?: () => void;
}

export const ExerciseCard = ({
	exercise,
	isFavorite,
	toggleFavorite,
	onClick,
}: ExerciseCardProps) => {
	const { deleteExercise } = useExerciseStore();

	return (
		<Card
			className='z-1 h-full cursor-pointer space-y-2 rounded-2xl border-none shadow-none'
			onClick={onClick}
		>
			<CardHeader className='relative object-cover p-0'>
				<Badge
					variant={difficultColors[exercise.difficult.value]}
					className='absolute top-2.5 z-10 rounded-l-none font-bold'
				>
					{}
					{exercise.difficult.label}
				</Badge>

				<div className='aspect-[400/285]'>
					<img
						src={exercise.imgUrl}
						alt={exercise.title}
						className='h-full w-full rounded-xl object-cover'
					/>
				</div>

				<button
					className='absolute top-0 right-0 grid size-12 place-items-center sm:size-10'
					onClick={(e) => {
						e.stopPropagation();
						toggleFavorite();
					}}
				>
					<Heart
						className={cn(
							'hover:stroke-primary size-7 fill-white/50 stroke-white/50 stroke-3 md:size-6',
							isFavorite && 'fill-primary stroke-primary'
						)}
					/>
				</button>
			</CardHeader>

			<CardContent className='space-y-2 p-0'>
				<CardTitle className='group-hover:text-primary/85'>
					{exercise.title}
				</CardTitle>
				<CardDescription>{exercise.description}</CardDescription>
				<button
					onClick={(e) => {
						e.stopPropagation();
						deleteExercise(exercise.id);
					}}
				>
					<Trash2 />
				</button>
			</CardContent>
		</Card>
	);
};
