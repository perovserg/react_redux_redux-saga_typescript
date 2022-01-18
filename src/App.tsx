import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Customer,
    addCustomerActionCreator,
    removeCustomerActionCreator,
    fetchCustomersActionCreator,
} from './store/customerReducer';
import {
    addCashActionCreator,
    asyncAddCashActionCreator,
    asyncGetCashActionCreator,
    getCashActionCreator
} from './store/cashReducer';

function App() {
    const dispatch = useDispatch();
    // @ts-ignore
    const cash = useSelector(state => state.cash.cash);
    // @ts-ignore
    const customers = useSelector(state => state.customers.customers);

    const addCash = useCallback(() => {
        dispatch(addCashActionCreator(Number(prompt())))
        // dispatch({ type: 'ADD_CASH', payload: Number(prompt()) });
    }, [dispatch]);

    const getCash = useCallback(() => {
        dispatch(getCashActionCreator(Number(prompt())));
        // dispatch({ type: 'GET_CASH', payload: Number(prompt()) });
    }, [dispatch]);

    const addCustomer = useCallback(() => {
        const name = String(prompt('Введите имя'));
        const customer: Customer = {
            id: Date.now().toString(),
            name,
        };
        dispatch(addCustomerActionCreator(customer));
    }, [dispatch]);

    const removeCustomer = useCallback(customer => {
        // dispatch({ type: CustomerActionTypes.remove, payload: customer});
        dispatch(removeCustomerActionCreator(customer.id));
    }, [dispatch]);

    const handleFetchCustomers = useCallback(() => {
        console.log('<< handleFetchCustomers() >>')
        dispatch(fetchCustomersActionCreator());
    }, [dispatch]);

    const asyncAddCash = useCallback(() => dispatch(asyncAddCashActionCreator()), [dispatch]);

    const asyncGetCash = useCallback(() => dispatch(asyncGetCashActionCreator()), [dispatch]);

    return (
        <>
            <div style={{ fontSize: '3rem', marginBottom: 20 }}>Баланс: {cash}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={addCash}>Пополнить счет</button>
                <button onClick={asyncAddCash}>Пополнить счет на 100</button>
                <button onClick={getCash}>Снять со счета</button>
                <button onClick={asyncGetCash}>Снять со счета 100</button>
                <button onClick={addCustomer}>Добавить клиента</button>
                <button onClick={handleFetchCustomers}>Получить клиентов из базы</button>
            </div>
            <div style={{ fontSize: '2rem', marginTop: 20 }}>
                {customers.length > 0
                    ? (
                        // @ts-ignore
                        customers.map(customer => (
                            <div
                                key={customer.id}
                                style={{ border: '1px solid black', padding: 10, marginTop: 5 }}
                                onClick={() => removeCustomer(customer)}
                            >
                                {customer.name}
                            </div>
                        ))
                    )
                    : 'Клиенты отсутствуют!'
                }
            </div>
        </>
    );
}

export default App;
