import { Button } from '@/shared/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card';
import { ShopItem } from '../model/models';

interface ShopItemCardProps {
	item: ShopItem;
}

export const ShopItemCard = ({ item }: ShopItemCardProps) => {
	return (
		<Card>
			<CardHeader>
				<img src={item.imgUrl} alt={item.title} />
				<CardTitle>{item.title}</CardTitle>
				<CardDescription>{item.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{item.price}</p>
				<Button>Купить</Button>
			</CardContent>
		</Card>
	);
};
