import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActualCurrency } from '../redux/actions';

const theState = {
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
  id: 0,
};

export default function WalletForm() {
  const { currencies } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const [currentState, setcurState] = useState(theState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setcurState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ...currentState,
      id: currentState.id,
    };
    dispatch(getActualCurrency(data));
    setcurState(() => ({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      id: currentState.id + 1,
    }));
    console.log(data);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="value-input">
        Valor:
        <input
          id="value-input"
          name="value"
          data-testid="value-input"
          value={ currentState.value }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="description-input">
        Descrição:
        <input
          id="description-input"
          name="description"
          data-testid="description-input"
          value={ currentState.description }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="currency-input">
        Moeda:
        <select
          id="currency-input"
          name="currency"
          data-testid="currency-input"
          value={ currentState.currency }
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
          name="method"
          data-testid="method-input"
          value={ currentState.method }
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
          name="tag"
          data-testid="tag-input"
          value={ currentState.tag }
          onChange={ handleChange }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
      <button
        type="submit"
      >
        Adicionar despesa
      </button>
    </form>
  );
}
