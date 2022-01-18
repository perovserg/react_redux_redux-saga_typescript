import { put, takeEvery } from 'redux-saga/effects';
import { addCashActionCreator, ASYNC_ADD_CASH, ASYNC_GET_CASH, getCashActionCreator } from '../store/cashReducer';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// workers
function* addCashWorker() {
	yield delay(1000);
	// пока непонятно как передать параметр через watcher => worker
	yield put(addCashActionCreator(100));
}

function* getCashWorker() {
	yield delay(1000);
	yield put(getCashActionCreator(100));
}

// watchers
export function* cashWatcher() {
	yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
	yield takeEvery(ASYNC_GET_CASH, getCashWorker);
}