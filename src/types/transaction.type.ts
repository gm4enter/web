import {PAYMENT_METHOD, TRANSACTION_STATUS, TYPE_TRANSACTION} from './enum'
import {PayerType} from './payer.type'

export interface TransactionType {
  _id: string
  value: number
  payer: PayerType
  typeTransaction: TYPE_TRANSACTION
  status: TRANSACTION_STATUS
  paymentMethod: PAYMENT_METHOD
  createdAt: string
  updatedAt: string
  amountAvailable: number
}
