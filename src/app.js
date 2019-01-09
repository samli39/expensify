import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';

import {addExpense,removeExpense} from './action/action_expenses';
import {setFilter} from './action/action_filter';
import expenseSelector from './selector/expenseSelector';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store =configureStore();

store.dispatch(addExpense({description:"water bill"}));
const bill=store.dispatch(addExpense({description:"gas bill"}));



const jsx =(
	<Provider store={store}>
		<AppRouter />
	</Provider>
)


ReactDOM.render(jsx,document.getElementById("app"));