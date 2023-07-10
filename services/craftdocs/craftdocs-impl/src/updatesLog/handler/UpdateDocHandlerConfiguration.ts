import { config } from '../config/UpdateLogConfig';
import { SaveDocLogService } from '../application/SaveDocLogService';
import { DynamoDocEventLogRepository } from '../application/repository/dynamo/DynamoDocEventLogRepository';
import { UpdateDocLogUseCase } from '../domain/UpdateDocLogUseCase';
import { UpdateDocLogHandler } from './UpdateDocLogHandler';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class UpdateDocLogHandlerConfiguration {
	static getHandler(): UpdateDocLogHandler {
		const dynamoDbDocumentClient: DocumentClient = new DocumentClient({ region: config.region });
		const repository = new DynamoDocEventLogRepository(dynamoDbDocumentClient, config.docEventLogTableName);
		const service = new SaveDocLogService(repository);
		const useCase = new UpdateDocLogUseCase(service);

		return new UpdateDocLogHandler(useCase);
	}
}
