import { Entity } from '@lkie/shared-model';
import { EntityId } from '@lkie/shared-model';

export interface ItemProps {
	id: string;
	data: string | Record<string, unknown>;
	createdAt: string;
	updatedAt: string;
}

// Item props and Item (Entity)
export class Item extends Entity<ItemProps> {
	constructor(props: ItemProps ){
		super(props, new EntityId(props.id));
	}
	update(newItem: Item):void {
		this.props = newItem.getProps();
		this.props.updatedAt = new Date().toISOString();
	}
	// static createFrom(command: CreateDataItemCommand)
}
