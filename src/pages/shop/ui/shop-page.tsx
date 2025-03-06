import img from '@/app/assets/img.png';
import { ShopItem } from '@/entities/shop/model/models';
import { Button } from '@/shared/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card';

export const ShopPage = ({ item }: { item: ShopItem }) => {
	return (
		<Card>
			<CardHeader>
				<img src={img} alt='' className='aspect-video w-full' />
				<CardTitle>{item.title}</CardTitle>
				<CardDescription>{item.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Button>Купить</Button>
			</CardContent>
		</Card>
	);
};
