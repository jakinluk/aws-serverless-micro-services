import { EntityId } from './EntityId';

export abstract class Entity<T, ID extends EntityId = EntityId> {
	constructor(protected props: T, private readonly id: ID) {}
	getProps(): T {
		return { ...this.props };
	}
	getId(): ID {
		return this.id;
	}
}
