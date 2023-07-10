import { DocEventLog } from './DocEventLog';

export class DocEventLogMapper {
	static toDomain(obj: Record<string, unknown>): DocEventLog {
		return new DocEventLog(
			{
				docId: obj.docId as string,
				uuid: obj.uuid as string,
				clientTimestamp: obj.clientTimestamp as number,
				serverTimestamp: obj.serverTimestamp as number,
				userId: obj.userId as string,
				deviceId: obj.deviceId as string,
				blocksChanges: obj.blocksChanges as any[], // TODO: fix type
				blocksPositionsChanges: obj.blocksPositionsChanges as any[], // TODO: fix type
				createdAt: obj.createdAt as string,
			}
		);
	}
}
