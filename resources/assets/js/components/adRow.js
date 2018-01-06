import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
};

export default class AdRow extends React.Component {
	render() {
		return (
			<Card>
				<CardTitle title={this.props.ad.title} />
				<CardText>
					{this.props.ad.description}
				</CardText>
				<CardActions>
					<RaisedButton label="Modifier" style={style} />
					<RaisedButton label="Supprimer" secondary={true} style={style}/>
				</CardActions>
			</Card>
		);
	}
}