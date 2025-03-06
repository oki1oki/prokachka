export interface Training {
	id: string;
	title: string;
	exercisesIds: string[];
}

export interface UserTraining extends EndTrainingData {
	id: string;
	trainigId: string;
	exercises: UserTrainingExercise[];
	totalTime: number;
	startDate: Date;
	endDate: Date | null;
}

export interface UserTrainingExercise {
	exerciseId: string;
	goal: number;
	reward: number;
}

export interface EndTrainingData {
	rating?: number;
	note?: string;
}
