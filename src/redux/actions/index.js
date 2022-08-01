export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const nakedPayload = await response.json();
  const payload = Object.keys(nakedPayload).filter((coin) => coin !== 'USDT');
  dispatch({ type: 'GET_CURRENCY', payload });
};

export const getActualCurrency = (data) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const nakedResponse = await response.json();
  const testing = await Promise.resolve(nakedResponse);
  const payload = {
    ...data,
    exchangeRates: testing,
  };
  dispatch({
    type: 'ADD_EXPENSE',
    payload,
  });
};

export const dltExpense = (payload) => ({ type: 'DLT_EXPENSE', payload });

export const editExpense = (payload) => ({ type: 'EDIT_EXPENSE', payload });

export const modifyExpense = (payload) => ({ type: 'MODIFY_EXPENSE', payload });
