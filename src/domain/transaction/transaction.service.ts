import { Injectable } from '@nestjs/common';
import {
  CreateTransactionDto,
  TRANSACTION_TYPE,
} from './dto/create-transaction.dto';
import { PrismaService } from '../prisma/prisma.service';
import { OPERATION_TYPE } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.user.update({
      where: {
        id: createTransactionDto.accountId,
      },
      data: {
        transaction: {
          create: [
            {
              operation_type:
                createTransactionDto.operation_type as OPERATION_TYPE,
              trasaction_type:
                createTransactionDto.trasaction_type as TRANSACTION_TYPE,
              value: createTransactionDto.value,
              descriprion: createTransactionDto.descriprion,
              completed: true,
              Date: createTransactionDto.Date,
            },
          ],
        },
      },
    });
  }
}
