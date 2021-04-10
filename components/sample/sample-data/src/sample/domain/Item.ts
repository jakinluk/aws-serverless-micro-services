import { Entity } from '@lkie/shared-model';

export interface ItemProps {
	id: string;
	prop1: string;
	prop2: string;
}

// Item props and Item (Entity)
export class Item extends Entity<ItemProps> {}
