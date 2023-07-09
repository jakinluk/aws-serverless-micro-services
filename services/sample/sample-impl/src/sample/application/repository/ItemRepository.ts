export interface ItemRepository {
	getItem(id: string): Promise<Record<string, unknown>>;
}
