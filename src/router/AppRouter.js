import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter=()=>(
	<BrowserRouter >
		{/*BorwserRouter only allow one child
		so we add div to wrap arount the multiple route tag */}
			{/* switch tag is for the 404 page*/}
		<div>
			<Header />
				<Switch>
					<Route path="/" component={ExpenseDashboardPage} exact/>
					<Route path="/create" component={AddExpensePage} />
					<Route path="/edit/:id" component={EditExpensePage} />
					<Route path="/help" component={HelpPage} />
					<Route component={NotFoundPage} />
				</Switch>

		</div>
	</BrowserRouter>
)

export default AppRouter;