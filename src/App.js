

import React from 'react'
import './App.css';
import axios from "axios";
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';
import Carrinho from './components/Carrinho/Carrinho';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TelaDeBusca from './components/TelaDeBusca/TelaDeBusca';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  state = {
    telaAtual: "home",
    valueMin: "",
    valueMax: "",
    search: "",
    listService: [],
    ordenacao: ""
  };
  mudarPagina = (nomeDaPagina) => {
    this.setState({ telaAtual: nomeDaPagina })

  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "home":
        return <Home mudarPagina={this.mudarPagina} />
      case "cadastro":
        return <TelaDeCadastro />
      case "busca":
        return <TelaDeBusca />
      case "carrinho":
        return <Carrinho />
      default:
        return <p>Erro! Página não encontrada.</p>
    }
  };

    //FILTROS -
    updateSearch = (e) => {
      this.setState({ search: e.target.value });
    };

    updateValueMin = (e) => {
      if (e.target.value < 0) {
        this.setState({ valueMin: "", });
      } else {
        this.setState({ valueMin: e.target.value });
      }
    };
      updateValueMax = (e) => {
        if (e.target.value < 0) {
          this.setState({ valueMax: "" });
        } else {
          this.setState({ valueMax: e.target.value });
        }
      };

      getAllJobs = () => {
        const url = `https://labeninjas.herokuapp.com/jobs`
        axios.get(url, {
          headers: {
            Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
          }
        }).then((resp) => {
          this.setState({ listService: resp.data.jobs })
        }).catch((error) => {
          console.log(error);
        })
      };

      getJobById = (id) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`
        axios.get(url, {
          headers: {
            Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
          }
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      };


      render ()   {
        let filterServices = []
        const filtrosCriterios = this.state.listService.filter(service => {
          return service.name.toLowerCase().includes(this.state.search.toLowerCase());
        }).filter(service => {
          return this.state.valueMin === "" || service.value >= this.state.valueMin;
        }).filter(service => {
          return this.state.valueMax === "" || service.value <= this.state.valueMax;
        }).map(service => {
          return filterServices.push(service);
        })
        return (
          <div>

            <Header mudarPagina={this.mudarPagina} />
            <p>O talento certo, no momento certo.</p>
            {this.escolheTela()}

            <Footer />
          </div>
        )
      }
    }
  