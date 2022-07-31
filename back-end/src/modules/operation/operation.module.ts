import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';

@Module({
  providers: [OperationService]
})
export class OperationModule {}
