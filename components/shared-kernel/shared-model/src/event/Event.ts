import { ImmutableDto } from './ImmutableDto';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line @typescript-eslint/ban-types
export class Event<T extends object> extends ImmutableDto<T> {
	protected readonly id: string;
	protected readonly timestamp: number;

	constructor(props: T) {
		super(props);
		this.id = uuidv4();
		this.timestamp = Date.now();
	}

	toJSON(): Record<string, unknown> {
		return { id: this.id, timestamp: this.timestamp, ...this.props };
	}

	getId(): string {
		return this.id;
	}

	getTimestamp(): number {
		return this.timestamp;
	}
}
