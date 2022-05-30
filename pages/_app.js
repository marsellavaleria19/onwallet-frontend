import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.scss';
import { Provider } from 'react-redux';
import buildStore from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const {store,persistor} = buildStore();

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
         </PersistGate>
      </Provider>);

}

export default MyApp;
