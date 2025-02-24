import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from '@/shared/ui/badge';

export type ExerciseDifficult = 'easy' | 'medium' | 'hard';

export type VideoPlatform = 'youtube' | 'vk' | 'rutube' | 'local';

export interface Exercise {
	id: string;
	title: string;
	description: string[];
	equipment: { value: string; label: string }[];
	muscleGroups: { value: string; label: string }[];
	imgUrl: string;
	videoUrl: string;
	// videoPlatform: VideoPlatform;
	localVideoFile?: File;
	difficult: ExerciseDifficult;
}

export const difficultMap = {
	easy: 'Легкое',
	medium: 'Среднее',
	hard: 'Сложное',
};

export const difficultColors: Record<
	ExerciseDifficult,
	VariantProps<typeof badgeVariants>['variant']
> = {
	easy: 'accept',
	medium: 'warn',
	hard: 'destructive',
};
