import React from 'react'
// import TelaDeBusca from './components/TelaDeBusca'
// import TelaDeCadastro from './components/TelaDeCadastro'
// import TelaDeDetalhes from './components/TelaDeDetalhes'
// import Carrinho from './components/Carrinho'
import Home from './components/Home';
import Header from './components/Header';
import TelaDeBusca from './components/TelaDeBusca';
// import Footer from './components/Footer';

export default class App extends React.Component {
	state = {
        telaAtual: "home"
    }
    escolheTelaDeCadastro= () => {
        switch (this.state.telaAtual) {
            case "home" :
                return <Home/>
            case "cadastro":
                return <TelaDeCadastro/>
            default:
                return <p>Erro! Página não encontrada.</p>    
        }

    }
    mudarParaCadastro = () => {
        this.setState ({telaAtual: "cadastro"})
    }
	escolheTelaDeBusca= () => {
        switch (this.state.telaAtual) {
            case "home" :
                return <Home/>
            case "busca":
                return <TelaDeBusca/>
            default:
                return <p>Erro! Página não encontrada.</p>    
        }

    }
    mudarParaBusca = () => {
        this.setState ({telaAtual: "busca"})
    }
	render() {
		return (
			<div>
				<Header />
				<p>O talento certo, no momento certo.</p>
				<Home mudarParaCadastro={this.mudarParaCadastro} mudarParaBusca={this.mudarParaBusca}/>
			</div>
		)
	}
}