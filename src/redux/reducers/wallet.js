const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const GET_CURRENCY = 'GET_CURRENCY';
const ADD_EXPENSE = 'ADD_EXPENSE';
const DLT_EXPENSE = 'DLT_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const MODIFY_EXPENSE = 'MODIFY_EXPENSE';

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DLT_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      idToEdit: action.payload.idToEdit,
      editor: action.payload.editor,
    };
  case MODIFY_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
