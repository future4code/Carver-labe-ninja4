import React from 'react'
import Carrinho from './components/Carrinho/Carrinho'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca'
import TelaDeDetalhes from './components/TelaDeDetalhes/TelaDeDetalhes'
import TelaDeCadastro from './components/TelaDeCadastro/TelaCadastro'


export default class App extends React.Component {
	state = {
		currentScreen: "home"
	}

	trocarPagina = () => {
		switch(this.state.currentScreen) {
			case "home":
				return <Home irParaHome={this.irParaHome}/>
			case "cadastro":
				return <TelaDeCadastro irParaCadastro={this.irParaCadastro()}/>
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

	irParaCadastro = (nomeTela) => {
		this.setState({
			currentScreen: nomeTela
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
					<TelaDeCadastro/>
				<Footer/>
			</div>
		)
	}
}	