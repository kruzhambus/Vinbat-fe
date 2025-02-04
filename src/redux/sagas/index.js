import { all } from "redux-saga/effects";
import loginWatcher from "./LoginSaga";
import registerWatcher from "./RegisterSaga";
import caseWatcher from "./CaseSaga";
import alertWatcher from "./AlertSaga";
import myAccountWatcher from "./MyAccountSaga";
import isLoggedInWatcher from "./IsLoggedInSaga";

export default function* rootWatcher() {
    yield all([
        loginWatcher(),
        registerWatcher(),
        caseWatcher(),
        alertWatcher(),
        myAccountWatcher(),
        isLoggedInWatcher()
    ])
}