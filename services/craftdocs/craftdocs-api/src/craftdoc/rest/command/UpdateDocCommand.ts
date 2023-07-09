import { ImmutableDto } from '@lkie/shared-model';
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

export interface UpdateDocCommandProps {
	docId: string;
	uuid: string;
	clientTimestamp: number;
	serverTimestamp: number;
	userId: string;
	deviceId: string;
	blocksChanges: BlockChange[];
	blocksPositionsChanges: BlockPosition[];
}

export class UpdateDocCommand extends ImmutableDto<UpdateDocCommandProps> {
	constructor(props: UpdateDocCommandProps) {
		super(props);
	}
	static fromEvent(event: APIGatewayProxyEvent): UpdateDocCommand {
		if(!event.pathParameters?.docId){
			throw new Error('Invalid event: missing docId');
		}
		const userId = "userId12"; //connect cognito and event.requestContext.authorizer?.jwt.claims.sub; 

		const body = JSON.parse(event.body);

		//TODO perform validation against schema 
		const props:UpdateDocCommandProps = {
			docId: event.pathParameters.docId,
			uuid: event.pathParameters.uuid,
			userId: userId,
			clientTimestamp: body.timestamp,
			serverTimestamp: new Date().getTime(),
			deviceId: body.deviceId,
			blocksChanges: body.blocksChanges,
			blocksPositionsChanges: body.blocksPositionsChanges,
		};
		return new UpdateDocCommand(props);
	}
}
