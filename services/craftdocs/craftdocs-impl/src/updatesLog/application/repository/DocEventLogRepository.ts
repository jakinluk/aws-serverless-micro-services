import { DocEventLog } from '../../domain/model/DocEventLog';

export interface DocEventLogRepository {
	save(log: DocEventLog): Promise<void>;
}
