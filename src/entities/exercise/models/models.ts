type ExerciseDifficult = "easy" | "medium" | "hard";

export interface Exercise {
	id: string;
	title: string;
	description: string[];
	equipment: { value: string; label: string }[];
	muscleGroups: { value: string; label: string }[];
	videoUrl: string;
	difficult: ExerciseDifficult;
}
