import { Link } from 'react-router-dom';
import { mockExercises } from '@/entities/exercise/models/mock';
import { EditExerciseModal } from '@/entities/exercise/ui/edit-exercise-modal';
import { ExerciseCard } from '@/entities/exercise/ui/exercise-card';

export const CatalogPage = () => {
	return (
		<div>
			<h1>Catalog Page</h1>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{mockExercises.map((exercise) => (
					<ExerciseCard key={exercise.id} exercise={exercise} />
				))}
			</div>
			<Link className='text-red-500' to='/'>
				Go back to Home
			</Link>
			<EditExerciseModal />
		</div>
	);
};
