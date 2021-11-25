import React from 'react'
import axios from "axios";
// import TelaDeBusca from './components/TelaDeBusca'
import {Filtro} from "./components/Filtro/Filtro";
import TelaDeCadastro from './components/TelaDeCadastro/TelaCadastro'
 import TelaDeDetalhes from './components/TelaDeDetalhes/TelaDeDetalhes'
// import Carrinho from './components/Carrinho'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca';
// import Footer from './components/Footer';

export default class App extends React.Component {
	state = {
        telaAtual: "home",
        valueMin: "",
 		valueMax: "",
    	search:"",
        listService: [],
        ordenacao:""
    }

    //FILTROS -
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

getAllJobs = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`
    axios.get( url, {
    headers: {
        Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
    }
    }).then((resp) => {
    this.setState({listService:resp.data.jobs})
    }).catch((error) => {
    console.log(error);
    })
}

getJobById = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.get( url, {
        headers: {
            Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
        }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
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
                
				<Header />
				<p>O talento certo, no momento certo.</p>
				<Home mudarParaCadastro={this.mudarParaCadastro} mudarParaBusca={this.mudarParaBusca}/>
                
                </div>
                  
		)
	}
}