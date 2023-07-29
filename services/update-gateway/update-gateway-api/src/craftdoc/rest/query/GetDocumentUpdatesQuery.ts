import { ImmutableDto } from '@lkie/shared-model';
import { APIGatewayProxyEvent } from 'aws-lambda/trigger/api-gateway-proxy';

export interface GetDocumentUpdatesQueryProps {
	docId: string;
	sinceTimestamp: number;
}

export class GetDocumentUpdatesQuery extends ImmutableDto<GetDocumentUpdatesQueryProps> {
	constructor(props: GetDocumentUpdatesQueryProps) {
		super(props);
	}
	static fromEvent(event: APIGatewayProxyEvent): GetDocumentUpdatesQuery {
		if(!event.pathParameters?.docId){
			throw new Error('Invalid event: missing docId');
		}
		if(!event.pathParameters?.sinceTimestamp){
			throw new Error('Invalid event: missing sinceTimestamp');
		}
		const props:GetDocumentUpdatesQueryProps = {
			docId: event.pathParameters.docId,
			sinceTimestamp: parseInt(event.pathParameters.sinceTimestamp),
		};
		return new GetDocumentUpdatesQuery(props);
	}
}
