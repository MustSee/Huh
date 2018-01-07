import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OneAd from './oneAd';
import AllAds from './allAds';

export default class Ads extends React.Component {
	render() {
		return(
			<Switch>
				<Route exact path='/' component={AllAds} />
				<Route exact path='/:number' component={OneAd} />
			</Switch>
		);
	}
}