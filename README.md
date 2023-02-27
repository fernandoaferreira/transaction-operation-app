## Transaction operations

Microservices responsavel por efetuar as transações bancarias da carteira

![picpay2](https://user-images.githubusercontent.com/33635248/221704092-c6d798fd-3698-4d3c-abdb-7f61de0e5224.jpg)

Transaction Operation tem responsabilidade de efetuar todas as trasaçãoes da carteira.

Se tratando de uma carteira de valores não existe DELETE afim de manter a integridade dos dados

user (account)

http://localhost:3000/user

criação de usuario de contas

{ 
  "name": "nome do usario",
  "email": "email@email.com"
}

http://localhost:3000/transaction

Efetua todas as trasações de credito e debito do usuario

{
  "operation_type": "credit",
  "trasaction_type": "pix",
  "value": 10.00,
  "descriprion": "descriprion",
  "accountId": "user id",
  "Date": "2023-02-27 17:00"
}



## Stay in touch

- Author - [Fernando Antunes]
