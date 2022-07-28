const INITIAL_STATE = {
  email: '',
};
export const ACCOMPLISH_LOGIN = 'ACCOMPLISH_LOGIN';

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACCOMPLISH_LOGIN:
    return {
      email: action.payload.email,
    };
  default: return state;
  }
};

export default user;
