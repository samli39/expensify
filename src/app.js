import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './router/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './action/action_expenses';
import {firebase} from './firebase/firebase';
import {login,logout} from './action/action_auth';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store =configureStore();

//why need hasRendered boolean??
//it is beacuse we only want people who is just visit the login page
//which mean they haven't loaded the jsx yet
//then login and load it
//if people have logout and login again,
//then we dont need to render jsx again.
let hasRendered=false;
const renderApp=()=>{
	(!hasRendered)?
		ReactDOM.render(jsx,document.getElementById("app"))
	:
		hasRendered=true;
}
const jsx =(
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById("app"));

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		//why this line has to been here
		//instead of in action
		//it is because put it here
		//if the user come back and they already login
		//then it automatically re-render
		store.dispatch(login(user.uid));
			store.dispatch(startSetExpense()).then(()=>{
				renderApp();

				//allow people refresh page not  back to login page
				//the if condiiton is for customer in login page
				//then redirect to dashboard
			if(history.location.pathname === '/'){
				history.push('/dashboard');
		}
	});
	}else{
		//renderApp () is for change loading screen back to login page
		//we need this beacuse the history.push is based on AppRouter 
		//which is in the jsx
		store.dispatch(logout());
		renderApp();
		history.push('/'); 
	}
}); 
