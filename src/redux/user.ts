export const userInitialState = {
  authorized: false,
};

export const userReducer = (state: any = userInitialState, action: any) => {
  switch (action.type) {
    case 'user_login': return {...state, authorized: true };
    default: return state;
  }
};

export const userActions = {
  login: () => ({ type: 'user_login', payload: {}})
};
