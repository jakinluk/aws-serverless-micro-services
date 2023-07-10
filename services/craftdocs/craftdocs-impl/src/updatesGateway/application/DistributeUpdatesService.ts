import { UseCaseResult } from '@lkie/shared-model';
import { DistributeUpdatesGateway } from '../domain/DistributeUpdatesGateway';
import { UpdateDocCommand, UpdateDocCommandResponse } from '@lkie/craftdocs-api';
import { UpdateDocUseCaseError } from '../domain/UpdateDocsUseCaseErrors';
import { SNS } from 'aws-sdk';

export class DistributeUpdatesService implements DistributeUpdatesGateway {
	constructor(private readonly snsClient: SNS, private readonly topicArn: string) {}  // sns: snsClient
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async distribute(command: UpdateDocCommand): Promise<UseCaseResult<UpdateDocCommandResponse, UpdateDocUseCaseError>> {
		await this.snsClient.publish(
			{
				Message: JSON.stringify(command.toJSON()),
				MessageStructure: 'json',
				TopicArn: this.topicArn,
			}).promise();
		return UseCaseResult.success({});
	}
	
}
