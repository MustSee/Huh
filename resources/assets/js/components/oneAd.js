import React from 'react';
import axios from 'axios';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

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
			this.setState({ad : response.data[0]});
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
						<Chip style={{margin : 4}}>
							{this.state.ad.name}
						</Chip>
					</div>
					<Divider/>
				</Paper>
		)
	}
}