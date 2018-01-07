import React, {Component} from 'react';
import './main.css';
import Header from './header';
import Ads from './ads';
import Form from './form';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
	render() {
		return(
			<MuiThemeProvider>
				<div>
					<Header />
					<div className='global'>
					<Switch>
						<Route exact path='/creer' component={Form}/>
						<Route exact path='/creer/:number' component={Form}/>
						<Route path='/' component={Ads}/>
					</Switch>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

