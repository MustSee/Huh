import React from 'react';
import axios from 'axios';
import AdRow from './adRow';

export default class AllAds extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ads: []
		}
		this.handleReRender = this.handleReRender.bind(this);
	}

	componentDidMount() {
		this.populateList();
	}

	populateList() {
		let uri = 'http://localhost:8000/api/ads';
		axios.get(uri).then((response) => {
			this.setState({ads: response.data.reverse()});
		});
	}

	handleReRender() {
		this.populateList();
	}


	render() {
		const rows = [];
		let ads = this.state.ads;
		ads.map((ad, index) => {
			return rows.push(
					<AdRow
						ad={ad} key={index} reRender={this.handleReRender}
					/>
			);
		})
		return (
				<div className="cards">
					{rows}
				</div>
		)
	}
}