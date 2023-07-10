import { UseCaseResult } from '@lkie/shared-model';
import { UpdateDocCommand, UpdateDocCommandResponse } from '@lkie/update-gateway-api';
import { UpdateDocUseCaseError } from './UpdateDocsUseCaseErrors';

export interface DistributeUpdatesGateway {
	distribute(command: UpdateDocCommand): Promise<UseCaseResult<UpdateDocCommandResponse, UpdateDocUseCaseError>>;
}