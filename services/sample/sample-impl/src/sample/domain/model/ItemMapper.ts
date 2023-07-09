import { Item } from './Item';

export class ItemMapper {
	static toDomain(obj: Record<string, unknown>): Item {
		return new Item(
			{
				id: obj.id as string,
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				data: obj.data as any,
				createdAt: obj.createdAt as string,
				updatedAt: obj.updatedAt as string,
			}
		);
	}
}
