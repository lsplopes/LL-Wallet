import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import getCurrenciesThunk from '../redux/actions';

const theState = {
  valor: '',
  descricao: '',
  moeda: '',
  metodo: '',
  categoria: '',
};

export default function WalletForm() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrenciesThunk());
  // }, []);

  const { currencies } = useSelector((state) => state.wallet);
  console.log(currencies);

  const [currentState, setcurState] = useState(theState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setcurState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="valor"
          data-testid="value-input"
          value={ currentState.valor }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          name="descricao"
          data-testid="description-input"
          value={ currentState.descricao }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="currency-input">
        Moeda:
        <select
          id="currency-input"
          name="moeda"
          data-testid="currency-input"
          value={ currentState.moeda }
          onChange={ handleChange }
        >
          { currencies
            .map((coin, index) => (
              <option
                key={ index }
                value={ coin }
              >
                {coin}
              </option>)) }
        </select>
      </label>
      <label htmlFor="method-input">
        Método de pagamento:
        <select
          id="method-input"
          name="metodo"
          data-testid="method-input"
          value={ currentState.metodo }
          onChange={ handleChange }
        >
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
      </label>
      <label htmlFor="tag-input">
        Categoria:
        <select
          id="tag-input"
          name="categoria"
          data-testid="tag-input"
          value={ currentState.categoria }
          onChange={ handleChange }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    </form>
  );
}
