import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { conversationReducer } from "../features/conversation/conversationSlice";
import { loadingReducer } from "../components/loading/loadingSlice";
import { transactionReducer } from "../features/transaction/transactionSlice";
import { planReducer } from "../features/plan/planSlice";
import { siteReducer } from "../features/site/siteSlice";
import { snackBarReducer } from "../components/snackbar/snackbarSlice";
import { userReducer } from "../features/user/userSlice";

const rootReducer = combineReducers({
  siteReducer: siteReducer,
  conversationReducer: conversationReducer,
  planReducer: planReducer,
  loadingReducer: loadingReducer,
  snackBarReducer: snackBarReducer,
  transactionReducer: transactionReducer,
  userReducer: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
