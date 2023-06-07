import { all } from "redux-saga/effects";
import conversationSaga from "../features/conversation/conversationSaga";
import transactionSaga from "../features/transaction/transactionSaga";
import planSaga from "../features/plan/planSaga";
import siteSaga from "../features/site/siteSaga";
import userSaga from "../features/user/userSaga";
export default function* rootSaga() {
  yield all([conversationSaga(), transactionSaga(), planSaga(), siteSaga(), userSaga()]);
}
