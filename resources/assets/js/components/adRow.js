import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

const style = {
	margin: 12,
};

export default class AdRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnDelete = this.handleOnDelete.bind(this);
	}

	handleOnDelete() {
		// Delete doesn't work if AdBlock is active on the page
		let uri = 'http://localhost:8000/api/ads/';
		axios.delete(uri + this.props.ad.id).then((response) => {
			console.log(response);
			this.props.reRender();
		})
	}

	render() {
		let number = this.props.ad.id;
		return (
				<Card className='card'
							style={{
								marginTop: 10,
								marginLeft: 5,
								marginRight: 5
							}}>
					<Link to={`/${number}`} className='link'>
						<div className="cardHeader">
							<CardTitle
								title={this.props.ad.title}
								subtitle={this.props.ad.created_at ? this.props.ad.created_at.slice(0,10) : null}
							/>
							<Chip style={{margin : 4}}>
								{this.props.ad.name}
							</Chip>
						</div>
						<CardText>
							{this.props.ad.description}
						</CardText>
					</Link>
					<CardActions>
						<Link to={`/creer/${number}`}>
							<RaisedButton label="Modifier" style={style} />
						</Link>
						<RaisedButton label="Supprimer" secondary={true} style={style} onClick={this.handleOnDelete}/>
					</CardActions>
				</Card>
		);
	}
}