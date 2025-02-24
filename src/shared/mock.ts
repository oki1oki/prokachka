import { Account } from '@/entities/account';
import { Exercise } from '@/entities/exercise';

export const mockAccount: Account = {
	profile: {
		username: 'john_doe',
		age: 30,
		height: 180,
		weight: 75,
		goal: {
			type: 'muscleGain',
			value: 80,
			progress: 50,
		},
		expirience: 'intermediate',
		trainingDays: 5,
		favoritesExercises: ['1', '2', '3'],
		coins: 100,
	},
	statistics: {
		trainingsHistory: ['1', '2', '3'],
		completedTrainings: 50,
		totalTrainingTime: 1200,
		totalRepetitions: 10000,
		achievements: [
			{
				id: '1',
				title: 'First Training',
				description: 'Complete your first training session',
				receiptDate: new Date('2023-01-01'),
				rarity: 'common',
				goal: {
					value: 1,
					progress: 1,
				},
			},
			{
				id: '2',
				title: '100 Reps',
				description: 'Complete 100 repetitions',
				receiptDate: new Date('2023-02-01'),
				rarity: 'rare',
				goal: {
					value: 100,
					progress: 100,
				},
			},
		],
	},
};

export const mockExercises: Exercise[] = [
	{
		id: '1',
		title: 'ЖИМ',
		description: ['A basic push-up exercise.'],
		equipment: [{ value: 'none', label: 'None' }],
		muscleGroups: [{ value: 'chest', label: 'Chest' }],
		imgUrl: 'https://cdn.muscleandstrength.com/sites/default/files/barbell-bench-press_0.jpg',
		videoUrl: 'https://youtu.be/tuwHzzPdaGc',
		difficult: 'easy',
	},
	{
		id: '2',
		title: 'ЖИМ гантелей',
		description: ['A basic pull-up exercise.'],
		equipment: [{ value: 'pull-up-bar', label: 'Pull-Up Bar' }],
		muscleGroups: [{ value: 'back', label: 'Back' }],
		imgUrl: 'https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg',
		videoUrl: 'https://youtu.be/8nNi8jbbUPE',
		difficult: 'medium',
	},
	{
		id: '3',
		title: 'ЧЕТО',
		description: ['A basic squat exercise.'],
		equipment: [{ value: 'none', label: 'None' }],
		muscleGroups: [{ value: 'legs', label: 'Legs' }],
		imgUrl: 'https://cdn.muscleandstrength.com/sites/default/files/dumbbell-pullover.jpg',
		videoUrl: 'https://youtu.be/XZ3XSwmk1Os',
		difficult: 'hard',
	},
];
