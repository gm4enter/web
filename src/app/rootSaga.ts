import { all } from "redux-saga/effects";
import conversationSaga from "../features/conversation/conversationSaga";
import transactionSaga from "../features/transaction/transactionSaga";
import planSaga from "../features/plan/planSaga";
import siteSaga from "../features/site/siteSaga";
export default function* rootSaga() {
  yield all([conversationSaga(), transactionSaga(), planSaga(), siteSaga()]);
}
