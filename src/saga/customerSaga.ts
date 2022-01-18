import { put, takeEvery, call } from 'redux-saga/effects';
import {
	addManyCustomersActionCreator,
	CustomerActionTypes,
} from '../store/customerReducer';

const fetchCustomersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

// @ts-ignore
// return (dispatch) => {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then(json => dispatch(addManyCustomersAction(json)));
// }

function* fetchCustomersWorker() {
	const data = yield call(fetchCustomersFromApi);
	const json = yield call(() => new Promise(resolve => resolve(data.json())));
	yield put(addManyCustomersActionCreator(json));
}

export function* customerWatcher() {
	yield takeEvery(CustomerActionTypes.fetchCustomers, fetchCustomersWorker);
}
