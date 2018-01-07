import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
};

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title : '',
			description : '',
			id : ''
		}
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	componentDidMount() {
		if(this.props.match.params.number) {
			let id = this.props.match.params.number;
			let uri = 'http://localhost:8000/api/ads/';
			axios.get(uri + id).then((response) => {
				this.setState({
					title : response.data.title,
					description : response.data.description,
					id : response.data.id
				});
			});
		}
	}

	componentWillReceiveProps(nextProps){
		// Allow to pass from update to create refreshing the form
		let title = this.state.title;
		let description = this.state.description;
		let id = this.state.id;
		let props = nextProps.match.params.number;
		// console.log(!props && title !== "" && description !== "" && id !== "");
		if(!props && title !== "" && description !== "" && id !== "") {
			console.log('de modifier à créer');
			this.setState({
				title : "",
				description : "",
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
				description : this.state.description
			}
			let uri = 'http://localhost:8000/api/ads';
			axios.post(uri, ad).then((response) => {
				console.log(response);
			})
		} else {
			// Update
			const id = this.state.id;
			const ad = {
				title : this.state.title,
				description : this.state.description
			}
			let uri = 'http://localhost:8000/api/ads/';
			axios.put(uri + id, ad).then((response) => {
				console.log(response);
			})
		}
	}

	handleUserInput(e) {
		this.setState({[e.target.name]: e.target.value});
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