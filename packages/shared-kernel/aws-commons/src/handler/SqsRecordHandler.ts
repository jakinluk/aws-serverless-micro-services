/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ImmutableDto } from '@lkie/shared-model';
import { UseCase, UseCaseResult, BaseHandler } from '@lkie/shared-model';
import { UseCaseVoidResult } from '@lkie/shared-model/src/use-case/UseCaseVoidResult';
import { SQSRecord } from 'aws-lambda';
import { Context } from 'aws-lambda/handler';

export abstract class SqsRecordHandler<
  E extends ImmutableDto<object>,
  U extends UseCase<E, UseCaseVoidResult>
> extends BaseHandler<SQSRecord, E, U> {
  abstract process(event: E): Promise<any>;

  async handle(input: SQSRecord, context: Context): Promise<void> {
    return await this.process(this.extractEvent(input, context));
  }
}
