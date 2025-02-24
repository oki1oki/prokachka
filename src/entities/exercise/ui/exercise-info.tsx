import { Edit } from 'lucide-react';
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog';
import { Exercise } from '../models/models';

export const ExerciseInfo = ({ exercise }: { exercise: Exercise }) => {
	return (
		<div>
			<DialogHeader>
				<DialogTitle>{exercise?.title}</DialogTitle>
				<DialogDescription>
					{exercise.description.join(' ')}
				</DialogDescription>
			</DialogHeader>
			<div className='space-y-4'>
				<div>
					<h3 className='text-lg font-semibold'>Equipment</h3>
					<ul className='list-disc pl-5'>
						{exercise.equipment.map((item, index) => (
							<li key={index}>{item.label}</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='text-lg font-semibold'>Muscle Groups</h3>
					<ul className='list-disc pl-5'>
						{exercise.muscleGroups.map((item, index) => (
							<li key={index}>{item.label}</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='text-lg font-semibold'>Difficulty</h3>
					<p>{exercise.difficult}</p>
				</div>
				<div>
					<h3 className='text-lg font-semibold'>Video</h3>
					<iframe
						src={`https://www.youtube.com/embed/${exercise.videoUrl.split('/').pop()}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						className='h-[300px] w-full'
					/>
				</div>
				<button>
					<Edit />
				</button>
			</div>
		</div>
	);
};
