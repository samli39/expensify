import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducer/expenseReducer';
import filterReducer from '../reducer/filterReducer';
import authReducer from '../reducer/authReducer';


const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
	const store =createStore(
		combineReducers({
			expenses:expenseReducer,
			filters:filterReducer,
			auth:authReducer
		}),
		composeEnhance(applyMiddleware(thunk))
	)

	return store;
}