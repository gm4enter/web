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

export enum STATUS_SITE_UPDATE {
  PENDING = 'PENDING',
  CREATED = 'CREATED',
}

export enum IMAGE_SITE_UPLOAD {
  TYPE_96 = '96',
  TYPE_512 = '512',
  TYPE_640 = '640',
  TYPE_1024 = '1024',
  TYPE_1440 = '1440',
}