import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "./redux/store";
import './index.css';
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={false}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
