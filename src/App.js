import React from 'react'
import Home from './components/Home/Home';
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro'
import Header from './components/Header/Header';

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


	render () {
		return (
			<div>

				<Header />
				<p>O talento certo, no momento certo.</p>
				<Home mudarParaCadastro={this.mudarParaCadastro} mudarParaBusca={this.mudarParaBusca}/>

			</div>
		)
	}
}

