import { Exercise } from './models/models';

export const mockExercises: Exercise[] = [
	{
		id: '1',
		title: 'Push Up',
		description: ['A basic push-up exercise.'],
		equipment: [{ value: 'none', label: 'None' }],
		muscleGroups: [{ value: 'chest', label: 'Chest' }],
		videoUrl: 'https://example.com/push-up',
		difficult: 'easy',
	},
	{
		id: '2',
		title: 'Pull Up',
		description: ['A basic pull-up exercise.'],
		equipment: [{ value: 'pull-up-bar', label: 'Pull-Up Bar' }],
		muscleGroups: [{ value: 'back', label: 'Back' }],
		videoUrl: 'https://example.com/pull-up',
		difficult: 'medium',
	},
	{
		id: '3',
		title: 'Squat',
		description: ['A basic squat exercise.'],
		equipment: [{ value: 'none', label: 'None' }],
		muscleGroups: [{ value: 'legs', label: 'Legs' }],
		videoUrl: 'https://example.com/squat',
		difficult: 'easy',
	},
];
