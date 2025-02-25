export interface Training {
	id: string;
	title: string;
	exercisesIds: string[];
}

export interface UserTraining extends EndTrainingData {
	id: string;
	trainigId: string;
	totalTime: number;
	startDate: Date;
	endDate: Date | null;
}

export interface EndTrainingData {
	rating?: number;
	note?: string;
}
