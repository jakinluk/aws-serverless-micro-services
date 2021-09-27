export interface ItemRepository {
	getItem(id: string): Promise<{ [key: string]: unknown }>;
}
