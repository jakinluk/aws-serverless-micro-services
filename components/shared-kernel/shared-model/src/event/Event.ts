import { ImmutableDto } from './ImmutableDto';
import { v4 as uuidv4 } from 'uuid';

export class Event<T> extends ImmutableDto<T> {
  protected readonly props: T;
  protected readonly id: string;
  protected readonly timestamp: number;

  constructor(props: T) {
    super(props);
    this.id = uuidv4();
    this.timestamp = Date.now();
  }

  toJSON(): unknown {
    return { id: this.id, timestamp: this.timestamp, ...this.props };
  }

  getId(): string {
    return this.id;
  }

  getTimestamp(): number {
    return this.timestamp;
  }
}
