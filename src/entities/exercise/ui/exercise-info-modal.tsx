import { Edit, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog';
import { difficultColors, Exercise } from '../model/models';
import { useExerciseStore } from '../model/store';

// import { useExerciseStore } from '../models/store';

interface ExerciseInfoModalProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	exercise: Exercise | null;
}

export const ExerciseInfoModal = ({
	isOpen,
	setIsOpen,
	exercise,
}: ExerciseInfoModalProps) => {
	const [isEdit, setIsEdit] = useState(false);
	// const updateExercise = useExerciseStore((store) => store.updateExercise);
	const { deleteExercise } = useExerciseStore();

	useEffect(() => {
		if (isOpen) {
			setIsEdit(false);
		}
	}, [isOpen]);

	if (!exercise) return null;

	const handleSaveEdit = () => {
		console.log('Edit');
		// updateExercise()
	};

	const handleDeleteExercise = () => {
		setIsOpen(false);
		deleteExercise(exercise.id);
	};

	const notDirty = true;

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<DialogHeader className='my-4'>
					<iframe
						src={`https://www.youtube.com/embed/${exercise.videoUrl.split('/').pop()}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						className='mb-4 aspect-video rounded-xl'
					/>
					<div className='flex justify-between'>
						<DialogTitle>{exercise.title}</DialogTitle>
						<Badge
							variant={difficultColors[exercise.difficult.value]}
						>
							{exercise.difficult.label}
						</Badge>
					</div>
					<DialogDescription>
						{exercise.description.join(' ')}
					</DialogDescription>
				</DialogHeader>
				<div className='mb-8 space-y-4 *:space-y-1'>
					<div>
						<h3 className='text-lg font-semibold'>Группы мышц</h3>
						<ul className='flex flex-wrap gap-2'>
							{exercise.muscleGroups.map((i) => (
								<li key={i.value}>
									<Badge variant='secondary'>{i.label}</Badge>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold'>
							Для упражнения понадобится
						</h3>
						<ul className='flex flex-wrap gap-2'>
							{exercise.equipment.map((i) => (
								<li key={i.value}>
									<Badge variant='secondary'>{i.label}</Badge>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='flex flex-row-reverse'>
					{!isEdit && (
						<div className='space-x-2'>
							<Button
								variant='outline'
								onClick={() => setIsEdit(true)}
							>
								<Edit />
								Редактировать
							</Button>
							<Button
								variant='destructive'
								onClick={handleDeleteExercise}
							>
								<Trash2 />
								Удалить
							</Button>
						</div>
					)}
					{isEdit && (
						<div className='flex gap-2'>
							<Button
								onClick={() => setIsEdit(false)}
								variant='outline'
							>
								Закрыть
							</Button>
							<Button
								variant='outline'
								onClick={handleSaveEdit}
								disabled={notDirty}
							>
								Сохранить
							</Button>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};
