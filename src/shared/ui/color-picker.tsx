import { Check } from 'lucide-react';
import { useConfigStore } from '@/shared/config/store';
import { BASE_COLORS } from '@/shared/config/themes';

const ColorPicker = () => {
	const { theme, setTheme } = useConfigStore();

	return (
		<div className='grid grid-cols-4 gap-2 md:grid-cols-8'>
			{BASE_COLORS.map((item, index) => {
				const isActive = theme === item.name;

				return (
					<button
						key={index}
						onClick={() => setTheme(item.name)}
						style={{
							backgroundColor: `hsl(${item.color})`, // CSS стиль для фона
						}}
						className={`group flex h-10 items-center justify-center rounded-lg p-2 hover:outline hover:outline-gray-400 ${
							isActive ? 'outline outline-black' : ''
						}`}
					>
						{/* Иконка отображается, если элемент активен */}
						{isActive && <Check className='h-5 w-5 text-white' />}
					</button>
				);
			})}
		</div>
	);
};

export default ColorPicker;
