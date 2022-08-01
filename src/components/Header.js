import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { email } = useSelector((state) => state.user);
  const { expenses } = useSelector((state) => state.wallet);

  const totalCalculator = () => {
    const TEN = 10;
    const resultado = expenses
      .reduce((soma, atual) => soma
      + (parseFloat(atual.value, TEN)
      * parseFloat(atual.exchangeRates[(atual.currency)].ask, TEN)), 0).toFixed(2);
    console.log(expenses);
    return resultado;
  };

  return (
    <div>
      <span data-testid="total-field">
        { expenses.length === 0 ? 0 : totalCalculator() }
      </span>
      <span data-testid="header-currency-field">BRL</span>
      <span data-testid="email-field">{email}</span>
    </div>
  );
}
