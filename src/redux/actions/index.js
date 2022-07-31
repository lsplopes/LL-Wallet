export const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const nakedPayload = await response.json();
  const payload = Object.keys(nakedPayload).filter((coin) => coin !== 'USDT');
  dispatch({ type: 'GET_CURRENCY', payload });
};

export const getActualCurrency = (data) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const nakedResponse = await response.json();
  // const preparedResponse = nakedResponse[data.currency].ask;
  const payload = {
    ...data,
    exchangeRates: nakedResponse,
  };
  dispatch({
    type: 'ADD_EXPENSE',
    payload,
  });
};
