export interface Achievement {
	id: string;
	title: string;
	description: string;
	receiptDate: Date;
	rarity: "common" | "rare" | "epic" | "legendary";
	goal: {
		value: number;
		progress: number;
	};
}

export interface Profile {
	username: string;
	age: number;
	height: number;
	weight: number;
	goal: {
		type: "muscleGain" | "weightLoss" | "keepFit";
		value?: number;
		progress?: number;
	};
	expirience: "beginner" | "intermediate" | "advanced";
	trainingDays: number;

	favoritesExercises: number[];
	coins: number;
}

export interface AccountStatistics {
	trainingsHistory: number[];
	completedTrainings: number;
	totalTrainingTime: number;
	totalRepetitions: number;
	achievements: Achievement[];
}

export interface Account {
	profile: Profile;
	statistics: AccountStatistics;
}
