import { Context, SQSBatchItemFailure, SQSBatchResponse, SQSEvent, SQSRecord } from 'aws-lambda';

export class BatchedQueueEventsProcessor {
  async processEvent(event: SQSEvent, context: Context, func: (record: SQSRecord, context: Context) => Promise<void>): Promise<SQSBatchResponse> {

    const batchItemFailures:SQSBatchItemFailure[] = [];

    await Promise.all(
      event.Records.map(async (record) => {
        try {
          await func(record, context);
        } catch (error) {
          console.error('Error processing SQS record', { error });
          batchItemFailures.push({ itemIdentifier: record.messageId });
        }
      })
    );
    return { batchItemFailures };
  }
}
