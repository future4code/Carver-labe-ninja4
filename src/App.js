import React from 'react'
//import { AppContainer } from './components/AppContainer';
import {Filtro} from './components/Filtros';

export default class App extends React.Component {
	state = {
		valueMin: "",
		valueMax: "",
		search:"",
	}

	updateSearch = (e) => {
		this.setState({search: e.target.value,});
	}
	updateValueMin = (e) => {
		if (e.target.value < 0) {
			this.setState({valueMin: "",});
		  } else {
			this.setState({valueMin: e.target.value,});
		  }
	}
	updateValueMax = (e) => {
		if (e.target.value < 0) {
			this.setState({valueMax: "",});
		  } else {
			this.setState({valueMax: e.target.value,});
		  }
	}

	render(){
		let filterServices = []
		const filtrosCriterios = this.state.listService
		.filter(service => {
			return service.name.toLowerCase().includes(this.state.search.toLowerCase());
		})
		.filter(service => {
			return this.state.valueMin === "" || service.value >= this.state.valueMin;
		})
		.filter(service => {
			return this.state.valueMax === "" || service.value <= this.state.valueMax;
		})
		.map(service => {
			return filterServices.push(service);
		})

		return(
			<Filtro 
			valueMin={this.state.valueMin}
			valueMax={this.state.valueMax}
			search={this.state.search}
			updateSearch={this.updateSearch}
			updateValueMin={this.updateValueMin}
			updateValueMax={this.updateValueMax}
			/>
	)
	}

}

