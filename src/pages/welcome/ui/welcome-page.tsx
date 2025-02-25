import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

export const WelcomePage = () => {
	return (
		<Link to='/welcome' className='text-xl'>
			<Button className=''>class-variance-authority</Button>
		</Link>
	);
};
