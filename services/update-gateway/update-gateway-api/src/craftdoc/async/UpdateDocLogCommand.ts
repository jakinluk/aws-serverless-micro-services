import { ImmutableDto } from '@lkie/shared-model';
import { SQSRecord } from 'aws-lambda';


interface BlockChange {
	blockId: string;
	startPos: number;
	endPos: number;
	text: string;
}

interface BlockPosition {
	blockId: string;
	x: number;
	y: number;
}

export interface UpdateDocLogCommandProps {
	docId: string;
	uuid: string;
	clientTimestamp: number;
	serverTimestamp: number;
	userId: string;
	deviceId: string;
	blocksChanges: BlockChange[];
	blocksPositionsChanges: BlockPosition[];
}

export class UpdateDocLogCommand extends ImmutableDto<UpdateDocLogCommandProps> {
	constructor(props: UpdateDocLogCommandProps) {
		super(props);
	}
	static fromEvent(event: SQSRecord): UpdateDocLogCommand {

		const body = JSON.parse(event.body);
		const message = JSON.parse(body.Message);

		//TODO perform validation against schema 
		const props:UpdateDocLogCommandProps = {
			docId: message.docId,
			uuid: message.uuid,
			userId: message.userId,
			clientTimestamp: message.clientTimestamp,
			serverTimestamp: message.serverTimestamp,
			deviceId: message.deviceId,
			blocksChanges: message.blocksChanges,
			blocksPositionsChanges: message.blocksPositionsChanges,
		};
		return new UpdateDocLogCommand(props);
	}
}
