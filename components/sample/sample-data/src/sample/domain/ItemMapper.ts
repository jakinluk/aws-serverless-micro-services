import { EntityId } from '@lkie/shared-model';
import { Item } from './Item';

export class ItemMapper {
	static toDomain(obj: { [key: string]: unknown }): Item {
		return new Item(
			{
				id: obj.id as string,
				prop1: obj.prop1 as string,
				prop2: obj.prop2 as string,
			},
			new EntityId(obj.id as string),
		);
	}
}
