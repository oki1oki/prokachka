import { Edit, Heart, MoreVertical, Trash2 } from 'lucide-react';
import { Exercise } from '@/entities/exercise';
import { Badge } from '@/shared/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { useExerciseStore } from '../models/store';

interface ExerciseCardProps {
	exercise: Exercise;
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
	const { toggleEditModal, deleteExercise } = useExerciseStore();
	const badgeVariants: Record<string, 'warn' | 'destructive' | 'accept'> = {
		Среднее: 'warn',
		Сложное: 'destructive',
		Простое: 'accept',
	};

	return (
		<Card className='w-full space-y-2 border-none shadow-none sm:max-w-[300px]'>
			<CardHeader className='relative h-full w-full p-0'>
				<Badge
					variant={badgeVariants[exercise.difficult]}
					className='absolute -top-3 -left-3 z-10'
				>
					{exercise.difficult}
				</Badge>

				<video src={exercise.videoUrl} />

				<DropdownMenu modal={false}>
					<DropdownMenuTrigger className='absolute top-2 right-2 text-black'>
						<MoreVertical size={24} />
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem>
							<Heart />
							<span>В избранное</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => toggleEditModal(exercise)}
						>
							<Edit />
							<span>Редактировать</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							className='text-destructive focus:text-destructive'
							onClick={() => deleteExercise(exercise.id)}
						>
							<Trash2 />
							<span>Удалить</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</CardHeader>

			<CardContent className='space-y-2 px-0'>
				<CardTitle className='group-hover:text-primary/85'>
					{exercise.title}
				</CardTitle>
				<CardDescription>{exercise.description}</CardDescription>

				{/* <div className='min-h-fit space-x-1'>
					{exercise.muscleGroups.map((item, i) => (
						<Badge variant='secondary' key={i}>
							{item}
						</Badge>
					))}
				</div> */}
			</CardContent>
		</Card>
	);
};
