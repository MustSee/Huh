import React from 'react';
import axios from 'axios';
import AdRow from './adRow';
import Category from './category';

export default class AllAds extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ads: [],
			category : 0
		}
		this.handleReRender = this.handleReRender.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
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

	handleCategory(cat) {
		this.setState({category : cat})
	}


	render() {
		const rows = [];
		let ads = this.state.ads;
		let cat = this.state.category;
		ads.filter((ad) => {
			if(cat !== 0) {
				return ad.category_id === cat;
			}
			return ad;
		}).map((ad, index) => {
			return rows.push(
					<AdRow
						ad={ad} key={index} reRender={this.handleReRender}
					/>
			);
		})
		return (
			<div>
				<Category category={this.handleCategory}/>
				<div className="cards">
					{rows}
				</div>
			</div>
		)
	}
}