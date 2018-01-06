import React, {Component} from 'react';
import './main.css';
import Header from './header';
import Offres from './offres';
import Form from './form';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
	render() {
		return(
			<MuiThemeProvider>
				<div className="global">
					<Header />
					<Switch>
						<Route exact path='/' component={Offres}/>
						<Route path='/deposer' component={Form}/>
					</Switch>
				</div>
			</MuiThemeProvider>
		)
	}
}

