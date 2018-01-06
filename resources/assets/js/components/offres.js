import React from 'react';
import axios from 'axios';
import AdRow from './adRow';

export default class Offres extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ads : []
		}
	}

	componentDidMount() {
		let uri = 'http://localhost:8000/api/ads';
		axios.get(uri).then((response) => {
			this.setState({ads : response.data});
		});
	}

	render() {
		console.log(this.state.ads);
		const rows = [];
		let ads = this.state.ads;
		ads.map((ad, index) => {
			return rows.push(
				<AdRow
					ad={ad} key={index} />
			);
		})
		return(
			<div>
				{rows}
			</div>
		);
	}
}