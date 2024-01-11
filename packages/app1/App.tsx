import { Provider } from 'react-redux';
import { Pokemon } from './Pokemon';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
};
