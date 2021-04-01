export interface GetDataItemRepository {
	getItem(id: string): Promise<{ [key: string]: unknown }>;
}
