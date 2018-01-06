import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {
		return (
			<div>
				<AppBar
					title="Huh - Annonces"
					iconElementLeft={
						<IconButton
							onClick={this.handleToggle}
						>
							<Menu/>
						</IconButton>
					}
				/>
				<Drawer
					docked={false}
					width={250}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<div className="titleDrawer"> Huh - Annonces</div>
					<Divider/>
					<Link to='/'>
						<MenuItem onClick={this.handleClose}>Offres</MenuItem>
					</Link>
					<Link to='/deposer'>
						<MenuItem onClick={this.handleClose}>Déposer une anonce</MenuItem>
					</Link>
				</Drawer>
			</div>
		);
	}
}