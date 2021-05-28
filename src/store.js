import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const initialState ={};

const middkeware=[thunk];

const store=createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middkeware))
);


export default store;