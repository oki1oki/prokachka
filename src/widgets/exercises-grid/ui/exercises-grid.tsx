import { useState } from 'react';
import { useAccountStore } from '@/entities/account';
import { Exercise } from '@/entities/exercise';
import { ExerciseCard } from '@/entities/exercise/ui/exercise-card';
import { ExerciseInfo } from '@/entities/exercise/ui/exercise-info';
import { Dialog, DialogContent } from '@/shared/ui/dialog';
import { cn } from '@/shared/utils/tw-merge';

interface ExercisesGridProps {
	exercises: Exercise[];
	className?: string;
}

export const ExercisesGrid = ({ exercises, className }: ExercisesGridProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
		null
	);
	const { account, toggleFavoriteExercise } = useAccountStore();
	const favoritesExercises = account?.profile?.favExIds;

	const handleModalChange = (value: boolean) => {
		setIsModalOpen(value);

		if (!value)
			setTimeout(() => {
				setSelectedExercise(null);
			}, 150);
	};

	return (
		<>
			<div
				className={cn(
					'grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
					className
				)}
			>
				{exercises.map((ex) => (
					<ExerciseCard
						key={ex.id}
						exercise={ex}
						isFavorite={favoritesExercises?.includes(ex.id)}
						toggleFavorite={() => toggleFavoriteExercise(ex.id)}
						onClick={() => {
							setIsModalOpen(true);
							setSelectedExercise(ex);
						}}
					/>
				))}
			</div>

			<Dialog open={isModalOpen} onOpenChange={handleModalChange}>
				<DialogContent>
					{selectedExercise && (
						<ExerciseInfo exercise={selectedExercise} />
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
