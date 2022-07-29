const getCurrenciesThunk = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const nakedPayload = await response.json();
  const payload = Object.keys(nakedPayload).filter((coin) => coin !== 'USDT');
  console.log(payload);
  dispatch({ type: 'GET_CURRENCY', payload });
};

export default getCurrenciesThunk;
