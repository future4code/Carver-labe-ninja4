import React from 'react'
import TelaDeBusca from './components/TelaDeBusca'
import TelaCadastro from './components/TelaCadastro'
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