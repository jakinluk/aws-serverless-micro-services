import { SNS } from 'aws-sdk';
import { DistributeUpdatesService } from '../application/DistributeUpdatesService';
import { UpdateDocUseCase } from '../domain/UpdateDocUseCase';
import { UpdateDocHandler } from './UpdateDocHandler';
import { config } from '../config/UpdatesGatewayConfig';

export class UpdateDocHandlerConfiguration {
	static getHandler(): UpdateDocHandler {
		const snsService = new SNS();
		return new UpdateDocHandler(new UpdateDocUseCase(new DistributeUpdatesService(snsService, config.updatesTopicArn)));
	}
}
