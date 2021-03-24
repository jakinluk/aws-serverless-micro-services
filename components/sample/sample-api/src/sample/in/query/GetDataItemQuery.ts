import { ImmutableDto } from '@lkie/shared-model';
import { APIGatewayProxyEvent } from 'aws-lambda/trigger/api-gateway-proxy';

export interface GetDataItemQueryProps {
  id: string;
}

export class GetDataItemQuery extends ImmutableDto<GetDataItemQueryProps> {
  constructor(props: GetDataItemQueryProps) {
    super(props);
  }
  static fromEvent(event: APIGatewayProxyEvent): GetDataItemQuery {
    const props = {
      id: event.pathParameters.id,
    };
    return new GetDataItemQuery(props);
  }
}
