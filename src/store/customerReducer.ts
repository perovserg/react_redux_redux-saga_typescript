export enum CustomerActionTypes {
	add = "ADD_CUSTOMER",
	remove = "REMOVE_CUSTOMER",
	addMany = "ADD_MANY_CUSTOMERS",
	fetchCustomers = "FETCH_CUSTOMERS",
}

export interface Customer {
	id: string;
	name: string;
}

interface AddCustomerAction {
	type: CustomerActionTypes.add;
	payload: Customer;
}

interface RemoveCustomerAction {
	type: CustomerActionTypes.remove;
	payload: string;
}

interface AddManyCustomerAction {
	type: CustomerActionTypes.addMany;
	payload: Customer[];
}

interface FetchCustomersAction {
	type: CustomerActionTypes.fetchCustomers;
}

type CustomerAction =
	AddCustomerAction
	| RemoveCustomerAction
	| AddManyCustomerAction
	| FetchCustomersAction;

export interface CustomerState {
	customers: Customer[]
}

type CustomerReducer = (state: CustomerState, action: CustomerAction) => CustomerState;

const defaultState: CustomerState = {
	customers: [],
}

export const customerReducer: CustomerReducer = (state = defaultState, action: CustomerAction) => {
	switch (action.type) {
		case CustomerActionTypes.add:
			return { ...state, customers: [...state.customers, action.payload] };
		case CustomerActionTypes.remove:
			return { ...state, customers: state.customers.filter(({ id }) => id !== action.payload) };
		case CustomerActionTypes.addMany:
			return { ...state, customers: [...state.customers, ...action.payload] };
		case CustomerActionTypes.fetchCustomers:
			console.log('customerReducer >> fetchCustomers');
			return state;
		default:
			return state;
	}
};

// action creators
export const addCustomerActionCreator = (payload: Customer) => ({ type: CustomerActionTypes.add, payload });
export const removeCustomerActionCreator = (payload: string) => ({ type: CustomerActionTypes.remove, payload });
export const addManyCustomersActionCreator = (payload: Customer[]) => ({ type: CustomerActionTypes.addMany, payload });

export const fetchCustomersActionCreator = () => ({ type: CustomerActionTypes.fetchCustomers });
