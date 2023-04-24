import { all } from "redux-saga/effects";
import conversationSaga from "../features/conversation/conversationSaga";
export default function* rootSaga() {
  yield all([conversationSaga()]);
}
