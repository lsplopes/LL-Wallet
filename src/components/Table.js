import React from 'react';
import { useSelector } from 'react-redux';

export default function Table() {
  const { expenses } = useSelector((state) => state.wallet);

  const tableGenerator = () => {
    const TEN = 10;
    const resultado = expenses.map((expense) => (
      <tr key={ expense.id }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{parseFloat(expense.value, TEN).toFixed(2)}</td>
        <td>{expense.exchangeRates[expense.currency].name}</td>
        <td>{parseFloat(expense.exchangeRates[expense.currency].ask, TEN).toFixed(2)}</td>
        <td>
          {(parseFloat(expense.value, TEN)
      * parseFloat(expense.exchangeRates[(expense.currency)].ask, TEN)).toFixed(2)}
        </td>
        <td>Real</td>
      </tr>
    ));
    return resultado;
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        { expenses.length === 0 ? (<tr><td>Empty</td></tr>) : tableGenerator() }
      </tbody>
    </table>
  );
}
