import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReducer from '../reducer/expenseReducer';
import filterReducer from '../reducer/filterReducer';
import thunk from 'redux-thunk';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
	const store =createStore(
		combineReducers({
			expenses:expenseReducer,
			filters:filterReducer
		}),
		composeEnhance(applyMiddleware(thunk))
	)

	return store;
}