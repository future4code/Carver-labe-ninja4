import Axios from 'axios';
import React, { Component } from 'react'
import './TelaDeCadastro.css'


export default class TelaDeCadastro extends Component {

  state = {
    title: '',
    description: '',
    price: '',
    dueDate: '',
    paymentMethods: []
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  };

  handleDescription = (e) => {
    this.setState({ description: e.target.value })
  };

  handlePrice = (e) => {
    this.setState({ price: e.target.value })
  };

  handleDueDate = (e) => {
    this.setState({ dueDate: e.target.value })
  };

  handlePaymente = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({ paymentMethods: value })
  };

  fazerCadastro = () => {
    const body = {

      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      paymentMethods: this.state.paymentMethods,
      dueDate: this.state.dueDate
    }
    Axios.post(' https://labeninjas.herokuapp.com/jobs', body, {
      headers: {
        Authorization: "13dfeab9-2ccf-4951-9acd-0d66de76427d"
      }
    }).then(() => {
      alert('Produto cadastrado com sucesso.')
      this.setState({
        title: "",
        description: "",
        price: "",
        dueDate: "",
        paymentMethods: []
      })
    }).catch(() => {
      alert('erro ao cadastrar produto')
    })
  };

  render() {
    return (
      <div className="Inputs">
        <div className="container1">
          <div className="containerNomePrecoPrazo">
            
            <p>Nome:</p>
            <input placeholder={'Produto'}
              value={this.state.title}
              onChange={this.handleTitle} />
            
            <p>Valor:</p>
            <input placeholder={'Preço'}
              value={this.state.price}
              onChange={this.handlePrice} />
            <p>Prazo:</p>
            <input placeholder={'Prazo'}
              value={this.state.dueDate}
              onChange={this.handleDueDate}
              type='date' />
          </div>
          <div className="containerDescricaoEPagamento">
          <textarea placeholder={'Descrição'}
            value={this.state.description}
            onChange={this.handleDescription} />
            <br/>
            <p className="p">Qual a forma de pagamento que aceita?</p>
          <select className="" multiple value={this.state.paymentMethods} onChange={this.handlePaymente}>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
            <option>Boleto</option>
            <option>Pix</option>
          </select>
          
          </div>
        </div>
 
        <button className="button" onClick={this.fazerCadastro}>Cadastrar</button>
      </div>

    )
  }
};
