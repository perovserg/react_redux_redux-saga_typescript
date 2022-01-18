
interface CashAction {
	type: string;
	payload: number;
}

export interface CashState {
	cash: number
}

type CashReducer = (state: CashState, action: CashAction) => CashState;

const defaultState: CashState = {
	cash: 0,
}

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH";
export const ASYNC_GET_CASH = "ASYNC_GET_CASH";

export const cashReducer: CashReducer = (state = defaultState, action: CashAction) => {
	switch (action.type) {
		case ADD_CASH:
			return { ...state, cash: state.cash + action.payload };
		case GET_CASH:
			return {...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};

export const addCashActionCreator = (payload: number) => ({ type: ADD_CASH, payload });
export const getCashActionCreator = (payload: number) => ({ type: GET_CASH, payload });
export const asyncAddCashActionCreator = () => ({ type: ASYNC_ADD_CASH });
export const asyncGetCashActionCreator = () => ({ type: ASYNC_GET_CASH });
