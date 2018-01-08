import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const style = {
	margin: 12,
};

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title : '',
			description : '',
			category_id : '',
			id : ''
		}
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		if(this.props.match.params.number) {
			let id = this.props.match.params.number;
			let uri = 'http://localhost:8000/api/ads/';
			axios.get(uri + id).then((response) => {
				console.log(response);
				let res = response.data[0];
				this.setState({
					title : res.title,
					description : res.description,
					category_id : res.category_id,
					id : res.id
				});
			});
		}
	}

	componentWillReceiveProps(nextProps){
		// Allow to pass from update to create refreshing the form
		let title = this.state.title;
		let description = this.state.description;
		let id = this.state.id;
		let cat = this.state.category_id;
		let props = nextProps.match.params.number;
		// console.log(!props && title !== "" && description !== "" && id !== "");
		if(!props && title !== "" && description !== "" && id !== "" && cat !== "") {
			console.log('de modifier à créer');
			this.setState({
				title : "",
				description : "",
				category_id : null,
				id : ""
			});
			return true;
		} else {
			return false;
		}
	}

	handleOnSubmit(e) {
		e.preventDefault();
		if(this.state.id === '') {
			// Create
			const ad = {
				title : this.state.title,
				description : this.state.description,
				category_id : this.state.category_id
			}
			let uri = 'http://localhost:8000/api/ads';
			axios.post(uri, ad).then((response) => {
				// console.log(response);
			})
		} else {
			// Update
			const id = this.state.id;
			const ad = {
				title : this.state.title,
				description : this.state.description,
				category_id : this.state.category_id
			}
			let uri = 'http://localhost:8000/api/ads/';
			axios.put(uri + id, ad).then((response) => {
				// console.log(response);
			})
		}
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleChange(event, index, value) {
		this.setState({category_id : value});
	}

	render() {
		if(this.props.match.params.number) {
			var id = this.props.match.params.number;
		}

		return(
			<div className="cards">
				<Card style={{
						marginTop : 10,
						marginLeft : 5,
						marginRight : 5,

						display : "flex",
						justifyContent : "center",
					}}>
					{id ?
						<CardTitle title="Modifier une annonce"/>
						:
						<CardTitle title="Ajouter une annonce"/>
					}

					<form className="form" onSubmit={this.handleOnSubmit}>
						<br/>
					<TextField hintText="Titre de l'annonce"
										 name="title"
										 value={this.state.title}
										 onChange={this.handleUserInput}
										 style={{marginLeft : 10, marginRight : 10}}
					/>
					<br/><br/>
					<TextField
						hintText="Description de l'article"
						multiLine={true}
						rows={1}
						rowsMax={3}
						name="description"
						value={this.state.description}
						onChange={this.handleUserInput}
					/>
						<br/><br/>
						<SelectField
							style={{textAlign : "left"}}
							floatingLabelText="Catégorie"
							value={this.state.category_id}
							onChange={this.handleChange}
						>
							<MenuItem value={1} primaryText="Général" />
							<MenuItem value={2} primaryText="Infos" />
							<MenuItem value={3} primaryText="Vente/Achat" />
							<MenuItem value={4} primaryText="Rencontres" />
						</SelectField>
						<br/><br/><br/>
						<RaisedButton label="ajouter"
													type="submit"
													primary={true}
													style={style}
						/>
				</form>
				</Card>
			</div>
		);
	}
}