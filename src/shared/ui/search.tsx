import { SearchIcon } from 'lucide-react';
import { Input } from './input';

export const Search = () => {
	return (
		<div className='relative w-full'>
			<label>
				<Input className='w-full' />
				<SearchIcon className='absolute top-1/2 right-2 -translate-y-1/2' />
			</label>
		</div>
	);
};
