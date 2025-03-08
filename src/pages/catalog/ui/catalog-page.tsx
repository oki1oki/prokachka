import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExercisesGrid } from '@/widgets/exercises-grid';
import { useAccountStore } from '@/entities/account';
import { AddExercise, Exercise, useExerciseStore } from '@/entities/exercise';
import { mockAccount, mockExercises } from '@/shared/mock';
import { Button } from '@/shared/ui/button';
import { Search } from '@/shared/ui/search';

export const CatalogPage = () => {
	const [isFavorites, setIsFavorites] = useState(false);
	const { account, addAccount } = useAccountStore();
	const { exercises, addExercise } = useExerciseStore();

	const favoriteExercises = useMemo(() => {
		if (!isFavorites) return [];

		const favoritesIds = account?.profile?.favExIds || [];

		return favoritesIds.reduce<Exercise[]>((acc, id) => {
			const ex = exercises.find((ex) => ex.id === id);
			if (ex) acc.push(ex);
			return acc;
		}, []);
	}, [isFavorites, exercises, account?.profile?.favExIds]);

	return (
		<div className='flex flex-col items-start gap-2'>
			<h1>ПРИВЕТ {account?.profile?.username}</h1>
			<Search />
			<button
				onClick={() => mockExercises.forEach((ex) => addExercise(ex))}
			>
				ДОБАВИТЬ тест
			</button>
			<button onClick={() => addAccount(mockAccount)}>
				ДОБАВИТЬ ПРОФИЛЬ
			</button>
			<AddExercise />
			<Button onClick={() => setIsFavorites((prev) => !prev)}>
				{isFavorites ? 'Показать все' : 'Показать избранные'}
			</Button>
			<ExercisesGrid
				exercises={!isFavorites ? exercises : favoriteExercises}
			/>

			<Link className='text-red-500' to='/'>
				Go back to Home
			</Link>
		</div>
	);
};
