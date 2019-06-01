import { store } from '../../index';

const signIn = user => {
  store.dispatch({
    type: 'SIGN_IN',
    user
  });
};

const signOut = () => {
  store.dispatch({
    type: 'SIGN_OUT',
    user: null
  });
};

export default {
  signIn,
  signOut
};
