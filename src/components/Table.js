import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dltExpense, editExpense } from '../redux/actions';

export default function Table() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const handleDlt = ({ target }) => {
    const payload = expenses
      .filter((expense) => (parseInt(expense.id, 10) !== parseInt(target.id, 10)));
    dispatch(dltExpense(payload));
  };

  const handleEdit = ({ target }) => {
    const payload = { idToEdit: target.id, editor: true };
    dispatch(editExpense(payload));
  };

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
        <td>
          <button
            type="button"
            id={ expense.id }
            onClick={ handleDlt }
            data-testid="delete-btn"
          >
            Delete
          </button>
          <button
            type="button"
            id={ expense.id }
            onClick={ handleEdit }
            data-testid="edit-btn"
          >
            Editar despesa
          </button>

        </td>
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
