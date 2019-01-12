import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './action/action_expenses';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store =configureStore();





const jsx =(
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById("app"));

store.dispatch(startSetExpense()).then(()=>{
	ReactDOM.render(jsx,document.getElementById("app"));
})
