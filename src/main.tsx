import React from 'react';
import ReactDOM from 'react-dom/client';

/* Begin Redux things */
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./redux/store";
/* End Redux things */

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={<p>loading...</p>} persistor={persistor}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
