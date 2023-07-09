import { UseCase, UseCaseResult } from '@lkie/shared-model';
import { UpdateDocUseCaseError } from './UpdateDocsUseCaseErrors';
import { UpdateDocCommand, UpdateDocCommandResponse } from '@lkie/craftdocs-api';
import { DistributeUpdatesGateway } from './DistributeUpdatesGateway';

export class UpdateDocUseCase implements UseCase<UpdateDocCommand, UseCaseResult<UpdateDocCommandResponse>> {
	constructor(private readonly distributeGateway: DistributeUpdatesGateway) {}
	async process(command: UpdateDocCommand): Promise<UseCaseResult<UpdateDocCommandResponse>> {
		try {
			if(!this.distributeGateway){
				console.error('No gateway found');
				return UseCaseResult.failure(new UpdateDocUseCaseError(command));
			}
			return await this.distributeGateway.distribute(command);
		} catch (ex) {
			console.error(ex);
			return UseCaseResult.failure(new UpdateDocUseCaseError(command));
		}
	}
}
