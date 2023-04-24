import { all } from "redux-saga/effects";
import conversationSaga from "../features/conversation/conversationSaga";
import transactionSaga from "../features/transaction/transactionSaga";
export default function* rootSaga() {
  yield all([conversationSaga(),transactionSaga()]);
}
