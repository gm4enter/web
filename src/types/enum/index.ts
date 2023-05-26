export enum TYPE_TRANSACTION {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  PAYMENT = "payment",
}

export enum TRANSACTION_STATUS {
  PENDING = "PENDING",
  COMPLETE = "COMPLETE",
  CANCEL = "CANCEL",
}

export enum PAYMENT_METHOD {
  TRANSFER = "TRANSFER",
  CREDIT_CARD = "CREDIT_CARD",
}

export enum TYPE_TOPIC {
  OTHER_QUESTION = "추가 질문",
  CHECKING = "확인중",
  COMPLETE = "완료",
}

export enum TYPE_SORT {
  CREATED_AT_ASC = "createdAt@asc",
  CREATED_AT_DESC = "createdAt@desc",
}
