import { UseCaseResult } from '@lkie/shared-model';
import { UpdateDocCommand, UpdateDocCommandResponse } from '../../../../craftdocs-api/src';
import { UpdateDocUseCaseError } from './UpdateDocsUseCaseErrors';

export interface DistributeUpdatesGateway {
	distribute(command: UpdateDocCommand): Promise<UseCaseResult<UpdateDocCommandResponse, UpdateDocUseCaseError>>;
}