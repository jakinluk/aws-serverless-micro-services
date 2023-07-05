import { Item } from './Item';

export class ItemMapper {
	static toDomain(obj: { [key: string]: unknown }): Item {
		return new Item(
			{
				id: obj.id as string,
				prop1: obj.prop1 as string,
				prop2: obj.prop2 as string,
				createdAt: obj.createdAt as string,
				updatedAt: obj.updatedAt as string,
			}
		);
	}
}
