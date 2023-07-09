import { UseCaseResult } from '@lkie/shared-model';
import { DistributeUpdatesGateway } from '../domain/DistributeUpdatesGateway';
import { UpdateDocCommand, UpdateDocCommandResponse } from '@lkie/craftdocs-api';
import { UpdateDocUseCaseError } from '../domain/UpdateDocsUseCaseErrors';

export class DistributeUpdatesService implements DistributeUpdatesGateway {
	// constructor() {}  // sns: snsClient
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	distribute(command: UpdateDocCommand): Promise<UseCaseResult<UpdateDocCommandResponse, UpdateDocUseCaseError>> {
		throw new Error('Method not implemented.');
	}
	
}
