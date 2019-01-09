import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducer/expenseReducer';
import filterReducer from '../reducer/filterReducer';


export default ()=>{
	const store =createStore(
		combineReducers({
			expenses:expenseReducer,
			filters:filterReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)

	return store;
}