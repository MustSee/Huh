import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category_id : 0,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event, index, value) {
		this.setState({category_id : value}, () => { this.props.category(this.state.category_id)});
	}

	render() {
		return(
			<div className='category'>
				<SelectField
					style={{textAlign : "left"}}
					floatingLabelText="Catégorie"
					value={this.state.category_id}
					onChange={this.handleChange}
				>
					<MenuItem value={0} primaryText="Toutes" />
					<MenuItem value={1} primaryText="Général" />
					<MenuItem value={2} primaryText="Infos" />
					<MenuItem value={3} primaryText="Vente/Achat" />
					<MenuItem value={4} primaryText="Rencontres" />
				</SelectField>
			</div>
		);
	}
}