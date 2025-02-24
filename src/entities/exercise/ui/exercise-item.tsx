import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { Exercise } from '../models/models';
import { ExerciseCard } from './exercise-card';
import { ExerciseInfo } from './exercise-info';

interface ExerciseItemProps {
	exercise: Exercise;
	isFavorite?: boolean;
	toggleFavorite: () => void;
}

export const ExerciseItem = ({
	exercise,
	isFavorite,
	toggleFavorite,
}: ExerciseItemProps) => {
	return (
		<Dialog>
			<DialogTrigger>
				<ExerciseCard
					exercise={exercise}
					isFavorite={isFavorite}
					toggleFavorite={toggleFavorite}
				/>
			</DialogTrigger>

			<DialogContent>
				<ExerciseInfo exercise={exercise} />
			</DialogContent>
		</Dialog>
	);
};
