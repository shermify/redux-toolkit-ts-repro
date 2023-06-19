import { Provider } from 'react-redux';
import { Pokemon } from './Pokemon.tsx';
import { store } from './store.ts';

export const App = () => {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
};
