import { createStore, applyMiddleware, compose, Reducer } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "../reducers/rootReducer";
import { thunk } from "redux-thunk";


const composeEnhancers = compose;


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['list'],
    stateReconciler: autoMergeLevel2,
};


const pReducer = persistReducer(persistConfig, rootReducer as Reducer);

const store = createStore(
    pReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store);

export { persistor, store };
