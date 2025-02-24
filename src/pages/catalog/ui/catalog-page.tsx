import { Link } from 'react-router-dom';
import { useAccountStore } from '@/entities/account/models/store';
import { AddExercise, ExerciseItem } from '@/entities/exercise';
import { useExerciseStore } from '@/entities/exercise/models/store';
import { mockAccount, mockExercises } from '@/shared/mock';

export const CatalogPage = () => {
	const { account, toggleFavoriteExercise, addAccount } = useAccountStore();
	const { exercises, addExercise } = useExerciseStore();
	const favoritesExercises = account?.profile?.favoritesExercises;

	return (
		<div className='flex flex-col items-start gap-2'>
			<h1>ПРИВЕТ {account?.profile?.username}</h1>
			<button
				onClick={() => mockExercises.forEach((ex) => addExercise(ex))}
			>
				ДОБАВИТЬ
			</button>
			<button onClick={() => addAccount(mockAccount)}>
				ДОБАВИТЬ ПРОФИЛЬ
			</button>
			<AddExercise />
			<div className='mb-10 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5'>
				{exercises.map((ex) => (
					<ExerciseItem
						key={ex.id}
						exercise={ex}
						isFavorite={favoritesExercises?.includes(ex.id)}
						toggleFavorite={() => toggleFavoriteExercise(ex.id)}
					/>
				))}
			</div>
			Избранные упражнения:
			<div className='mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
				{exercises.map(
					(ex) =>
						favoritesExercises?.includes(ex.id) && (
							<ExerciseItem
								key={ex.id}
								exercise={ex}
								isFavorite
								toggleFavorite={() =>
									toggleFavoriteExercise(ex.id)
								}
							/>
						)
				)}
			</div>
			<Link className='text-red-500' to='/'>
				Go back to Home
			</Link>
		</div>
	);
};
