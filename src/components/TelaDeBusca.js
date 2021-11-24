import React from 'react'
import { Filtro } from './Filtro';

export default class TelaDeBusca extends React.Component{
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

    render () {
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
        return (
            <div>
                <div>
                    <button onClick={this.props.irParaHome}>Home</button>
                    <button onClick={this.props.irParaCadastro}>Cadastro</button>
                    <button onClick={this.props.irParaBusca}>Busca</button>
                    <button onClick={this.props.irParaCarrinho}>Carrinho</button>
                    <button onClick={this.props.irParaDetalhes}>Detalhes</button>
                </div>
                <Filtro
                valueMin={this.state.valueMin}
                valueMax={this.state.valueMax}
                search={this.state.search}
                updateSearch={this.updateSearch}
                updateValueMin={this.updateValueMin}
                updateValueMax={this.updateValueMax}
                />       

            </div>         
        )}
}