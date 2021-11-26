import React from 'react'
// import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro'
import Carrinho from './components/Carrinho/Carrinho';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



export default class App extends React.Component {
	state = {
        telaAtual: "home"
    }
    mudarPagina = (nomeDaPagina) =>{
        this.setState({ telaAtual: nomeDaPagina})

    }

    escolheTela= () => {
        switch (this.state.telaAtual) {
            case "home" :
                return <Home mudarPagina={this.mudarPagina}/>
            case "cadastro":
                return <TelaDeCadastro />
            case "busca":
                return <TelaDeBusca/>
            case "carrinho":
                return <Carrinho/>
            default:
                return <p>Erro! Página não encontrada.</p>    
        }

    }
    
	render () {
		return (
            
			<div>
               
              <Header mudarPagina={this.mudarPagina} />
				<p>O talento certo, no momento certo.</p>
				{this.escolheTela()}
                
                <Footer/>
			</div>
		)
	}
}

