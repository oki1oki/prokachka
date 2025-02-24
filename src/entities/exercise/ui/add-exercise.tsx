import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';

export const AddExercise = () => {
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0] || null;
		setFile(selectedFile);

		if (selectedFile) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(selectedFile);
		} else {
			setPreview(null);
		}
	};

	console.log(file);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>НОВОЕ</Button>
			</DialogTrigger>
			<DialogContent aria-describedby={undefined}>
				<DialogTitle>hi</DialogTitle>
				<Input type='file' onChange={handleFileChange} />
				{preview && (
					<img
						src={preview}
						alt='Preview'
						style={{ marginTop: '10px', maxWidth: '100%' }}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};
