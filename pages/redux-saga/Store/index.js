import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from '../Reducer'
import UserReducer from '../Reducer/UserReducer'
import UsrReducer from "../Reducer/UsrReducer";
import rootSaga from '../Middleware'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from 'redux';
const makeStore = context => {
    const logger = createLogger()
    const reducer = combineReducers({
        userStated: UserReducer,
        usrStated: UsrReducer
      });
      

    const saga = createSagaMiddleware()

    const store = createStore(
        reducer,
        undefined,
        composeWithDevTools(applyMiddleware(saga, logger))
    )
    store.sagaTask = saga.run(rootSaga)

    return store
}


const wrapper = createWrapper(makeStore)

export default wrapper

const saga = createSagaMiddleware();


// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(saga),
// });

// saga.run(rootSaga);

// export default store;