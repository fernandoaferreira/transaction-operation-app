import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum OPERATION_TYPE {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export enum TRANSACTION_TYPE {
  PIX = 'pix',
  TED = 'ted',
  DOC = 'doc',
  PURCHASE = 'purchase',
}

export class CreateTransactionDto {
  @IsEnum(OPERATION_TYPE, {
    message: `"operation_type" should be a valid type as ${OPERATION_TYPE['CREDIT']} or ${OPERATION_TYPE['DEBIT']}.`,
  })
  @IsNotEmpty({ message: `Please set a operation_type` })
  @IsString()
  operation_type: string;

  @IsEnum(TRANSACTION_TYPE, {
    message: `"operation_type" should be a valid type as ${TRANSACTION_TYPE['PIX']} or ${TRANSACTION_TYPE['TED']} or ${TRANSACTION_TYPE['DOC']} or ${TRANSACTION_TYPE['PURCHASE']}.`,
  })
  @IsNotEmpty({ message: `Please set a trasaction_type` })
  @IsString()
  trasaction_type: string;

  @IsNotEmpty({ message: `Please set a value` })
  @IsString()
  value: number;

  @IsNotEmpty({ message: `Please set a descriprion` })
  @IsString()
  descriprion: string;

  @IsNotEmpty({ message: `Please set a accountId` })
  @IsString()
  account: string;

  @IsNotEmpty({ message: `Please set a accountId` })
  @IsString()
  accountId: never;

  @IsNotEmpty({ message: `Please set a Date` })
  @IsString()
  Date: string;
}
