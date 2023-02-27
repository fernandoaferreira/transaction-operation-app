import { Module } from '@nestjs/common';
import { TransactionModule } from './domain/transaction/transaction.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [TransactionModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
