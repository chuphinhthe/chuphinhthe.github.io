import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

export default createStore(Reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
