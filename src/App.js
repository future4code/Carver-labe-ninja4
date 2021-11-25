import React from 'react'
import Home from './components/Home/Home';
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


export default class App extends React.Component {
	state = {
        telaAtual: "home"
    }
    escolheTela= () => {
        switch (this.state.telaAtual) {
            case "home" :
                return <div>
                <Header/>
                <Home/>
                <Footer/>
                </div>
            case "cadastro":
                return <div>
                    <Header/>
                    <TelaDeCadastro/>
                    <Footer/>
                    </div>
            case "busca":
                return <div>
                    <Header/>
                    <TelaDeBusca/>
                    <Footer/>
                </div>       
            default:
                return <p>Erro! Página não encontrada.</p>    
        }

    }
    mudarParaCadastro = () => {
        this.setState ({telaAtual: "cadastro"})
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
                <Footer/>
			</div>
		)
	}
}

