export class EntityId {
	constructor(private readonly id: string | number) {}
	value(): string | number {
		return this.id;
	}
}
