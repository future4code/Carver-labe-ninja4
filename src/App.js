import React from 'react'
import TelaDeBusca from './components/TelaDeBusca'
import TelaCadastro from './components/TelaCadastro'
import TelaDeDetalhes from './components/TelaDeDetalhes'
import Carrinho from './components/Carrinho'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends React.Component {
	state = {
		currentScreen: "home"
	}

	trocarPagina = () => {
		switch(this.state.currentScreen) {
			case "home":
				return <Home irParaHome={this.irParaHome}/>
			case "cadastro":
				return <TelaCadastro irParaCadastro={this.irParaCadastro}/>
			case "busca":
				return <TelaDeBusca irParaBusca={this.irParaBusca}/>
			case "carrinho":
				return <Carrinho irParaCarrinho={this.irParaCarrinho}/>
			case "detalhes":
				return <TelaDeDetalhes irParaDetalhes={this.irParaDetalhes}/>
			default:
				return <div>Página não encontrada</div>
		}
	}

	irParaCadastro = () => {
		this.setState({
			currentScreen: "cadastro"
		})
	}

	irParaBusca = () => {
		this.setState({
			currentScreen: "busca"
		})
	}


	irParaHome = () => {
		this.setState({
			currentScreen: "home"
		})
	}

	irParaCarrinho = () => {
		this.setState({
			currentScreen: "carrinho"
		})
	}

	irParaDetalhes = () => {
		this.setState({
			currentScreen: "detalhes"
		})
	}

	render () {
		return (
			<div>
				<Header/>
					{this.trocarPagina()}
				<Footer/>
			</div>
		)
	}
}	