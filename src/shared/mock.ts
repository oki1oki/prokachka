import { Training } from '@/features/training/models/models';
import { Account } from '@/entities/account';
import { Exercise } from '@/entities/exercise';
import { ShopItem } from '@/entities/shop/model/models';

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
		coins: 100,
		favExIds: ['1', '2', '3'],
		ownedItemsIds: ['1', '2', '3', '4'],
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
		title: 'Жим штанги лежа',
		description: [
			'Базовое упражнение для развития грудных мышц',
			'Выполняется на горизонтальной скамье',
		],
		equipment: [
			{ value: 'barbell', label: 'Штанга' },
			{ value: 'bench', label: 'Скамья' },
		],
		muscleGroups: [
			{ value: 'chest', label: 'Грудные' },
			{ value: 'triceps', label: 'Трицепс' },
		],
		imgUrl: 'https://cdn.muscleandstrength.com/sites/default/files/barbell-bench-press_0.jpg',
		videoUrl: 'https://youtu.be/tuwHzzPdaGc',
		difficult: {
			value: 'medium',
			label: 'Среднее',
		},
		metric: 'weight',
	},
	{
		id: '2',
		title: 'Становая тяга',
		description: [
			'Комплексное упражнение для всего тела',
			'Основная нагрузка на спину и ноги',
		],
		equipment: [{ value: 'barbell', label: 'Штанга' }],
		muscleGroups: [
			{ value: 'back', label: 'Спина' },
			{ value: 'legs', label: 'Ноги' },
		],
		imgUrl: 'https://proteinhouse.net/image/data/blog/gainingmass/2.jpg',
		videoUrl: 'https://youtu.be/8nNi8jbbUPE',
		difficult: {
			value: 'medium',
			label: 'Среднее',
		},
		metric: 'weight',
	},
	{
		id: '3',
		title: 'Приседания со штангой',
		description: ['Базовое упражнение для ног'],
		equipment: [
			{ value: 'barbell', label: 'Штанга' },
			{ value: 'rack', label: 'Стойка' },
		],
		muscleGroups: [
			{ value: 'legs', label: 'Ноги' },
			{ value: 'glutes', label: 'Ягодицы' },
		],
		imgUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/1704908/pub_5e6960221eec766a4e439ff7_5e697f68ca551a68df05091e/scale_1200',
		videoUrl: 'https://youtu.be/XZ3XSwmk1Os',
		difficult: {
			value: 'medium',
			label: 'Среднее',
		},
		metric: 'weight',
	},
	{
		id: '4',
		title: 'Подтягивания',
		description: ['Упражнение для спины с собственным весом'],
		equipment: [{ value: 'pull-up-bar', label: 'Турник' }],
		muscleGroups: [
			{ value: 'back', label: 'Спина' },
			{ value: 'biceps', label: 'Бицепс' },
		],
		imgUrl: 'https://images.techinsider.ru/upload/img_cache/eb0/eb016c03bc80f92f1d8b5cb8f703ceb6_ce_1620x1080x156x0.jpg',
		videoUrl: 'https://youtu.be/eGo4IYlbE5g',
		difficult: {
			value: 'medium',
			label: 'Среднее',
		},
		metric: 'repetitions',
	},
	{
		id: '5',
		title: 'Отжимания от пола',
		description: ['Базовое упражнение для верха тела'],
		equipment: [{ value: 'none', label: 'Без оборудования' }],
		muscleGroups: [
			{ value: 'chest', label: 'Грудные' },
			{ value: 'triceps', label: 'Трицепс' },
		],
		imgUrl: 'https://musclefit.info/wp-content/uploads/2020/09/polza-otzhimanij.jpg',
		videoUrl: 'https://youtu.be/IODxDxX7oi4',
		difficult: {
			value: 'medium',
			label: 'Среднее',
		},
		metric: 'repetitions',
	},
];

export const mockTrainings: Training[] = [
	{
		id: '1',
		title: 'Тренировка верха тела',
		exercisesIds: ['1', '4', '5'], // Жим штанги, подтягивания, отжимания
	},
	{
		id: '2',
		title: 'Тренировка ног',
		exercisesIds: ['2', '3'], // Становая тяга и приседания
	},
	{
		id: '3',
		title: 'Полная тренировка тела',
		exercisesIds: ['1', '2', '3', '4', '5'], // Все упражнения
	},
];

export const mockShopItems: ShopItem[] = [
	{
		id: '1',
		title: 'Сывороточный протеин',
		description:
			'Высококачественный сывороточный протеин для набора мышечной массы.',
		price: 2500,
		imgUrl: 'https://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.pnghttps://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.png',
	},
	{
		id: '2',
		title: 'Гантели 10 кг',
		description: 'Регулируемые гантели для домашних тренировок.',
		price: 1500,
		imgUrl: 'https://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.pnghttps://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.png',
	},
	{
		id: '3',
		title: 'Фитнес-браслет',
		description: 'Умный браслет с отслеживанием пульса и расхода калорий.',
		price: 3000,
		imgUrl: 'https://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.pnghttps://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.png',
	},
	{
		id: '4',
		title: 'Коврик для йоги',
		description: 'Экологичный коврик для занятий йогой и фитнесом.',
		price: 1200,
		imgUrl: 'https://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.pnghttps://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.png',
	},
	{
		id: '5',
		title: 'Спортивная бутылка для воды',
		description: 'Бутылка для воды с удобной крышкой и мерной шкалой.',
		price: 800,
		imgUrl: 'https://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.pnghttps://primekraft.ru/upload/iblock/471/471730ceca7cc1b26774cf17e2a28293.png',
	},
];
