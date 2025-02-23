import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog';
import { useExerciseStore } from '../models/store';

export const EditExerciseModal = () => {
	const { isEditModalOpen, toggleEditModal, currentExercise } =
		useExerciseStore();
	console.log(currentExercise);

	return (
		<Dialog
			open={isEditModalOpen}
			onOpenChange={() => toggleEditModal(currentExercise!)}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{currentExercise?.title}</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
