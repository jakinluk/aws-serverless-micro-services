import { ImmutableDto } from '@lkie/shared-model';
import { SQSRecord } from 'aws-lambda';
import { APIGatewayProxyEvent } from 'aws-lambda/trigger/api-gateway-proxy';


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

		//TODO perform validation against schema 
		const props:UpdateDocLogCommandProps = {
			docId: body.docId,
			uuid: body.uuid,
			userId: body.userId,
			clientTimestamp: body.timestamp,
			serverTimestamp: body.serverTimestamp,
			deviceId: body.deviceId,
			blocksChanges: body.blocksChanges,
			blocksPositionsChanges: body.blocksPositionsChanges,
		};
		return new UpdateDocLogCommand(props);
	}
}
