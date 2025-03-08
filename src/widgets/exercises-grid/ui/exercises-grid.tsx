import { useState } from 'react';
import { useAccountStore } from '@/entities/account';
import { Exercise, ExerciseInfoModal, ExerciseCard } from '@/entities/exercise';
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

	console.log(exercises);

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

			<ExerciseInfoModal
				isOpen={isModalOpen}
				setIsOpen={handleModalChange}
				exercise={selectedExercise}
			/>
		</>
	);
};
