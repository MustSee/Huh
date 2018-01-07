import React from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
	height: 500,
	width: 500,
	margin: 20,
	textAlign: 'center'
};

export default class OneAd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ad : {}
		}
	}

	componentDidMount() {
		let id = this.props.match.params.number;
		let uri = 'http://localhost:8000/api/ads/';
		axios.get(uri + id).then((response) => {
			this.setState({ad : response.data});
		});
	}

	render() {
		console.log(this.state.ad);
		return (
				<Paper style={style} zDepth={5}>
					<div className='adHeader'>
						<span>{this.state.ad.title}</span>
						<span>{this.state.ad.created_at}</span>
					</div>
					<Divider/>
					<div className='adBody'>
						{this.state.ad.description}
					</div>
					<Divider/>
					<div className='adCategory'>
						Chip categories
					</div>
					<Divider/>
				</Paper>
		)
	}
}