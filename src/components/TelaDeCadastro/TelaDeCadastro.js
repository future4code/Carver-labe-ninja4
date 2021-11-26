import Axios from 'axios';
import React, { Component } from 'react'
import {Inputs} from './StyledCadastro'


export default class TelaDeCadastro extends Component {
  
state={
  title:'',
  description:'',
  price:'',
  dueDate:'',	
  paymentMethods:[]
};

handleTitle=(e)=>{
this.setState({title: e.target.value})
};

handleDescription=(e)=>{
  this.setState({description: e.target.value})
};

handlePrice=(e)=>{
  this.setState({price: e.target.value})
};

handleDueDate=(e)=>{
  this.setState({dueDate: e.target.value})
};

handlePaymente=(e)=>{
  let value = Array.from(e.target.selectedOptions, option => option.value)
  this.setState({ paymentMethods: value })
};

fazerCadastro=()=>{
  const body={
    
      title: this.state.title,
      description: this.state.description,
      price: Number (this.state.price),
      paymentMethods :this.state.paymentMethods,
      dueDate: this.state.dueDate
  }
  Axios.post(' https://labeninjas.herokuapp.com/jobs', body,{
    headers: {
      Authorization:"13dfeab9-2ccf-4951-9acd-0d66de76427d"
    }
  }).then(()=>{
    alert('Produto cadastrado com sucesso.')
    this.setState({
      title: "",
      description: "",
      price: "",
      dueDate: "",
      paymentMethods: []
  })
  }).catch((err)=>{
    console.log(err.response.data)
    alert('erro ao cadastrar produto')
  })
};  

  render() {
    return (
      <Inputs>
      <h2 color=''>Cadastrar Serviço</h2>
    <input placeholder={'Produto'}
    value={this.state.title}
    onChange={this.handleTitle}/>
    <input placeholder={'Preço'}
    value={this.state.price}
    onChange={this.handlePrice}/>
    <input placeholder={'Descrição'}
    value={this.state.description}
    onChange={this.handleDescription}/> 
    <select  multiple value={this.state.paymentMethods} onChange={this.handlePaymente}>
                    <option>Cartão de Crédito</option>
                    <option>Cartão de Débito</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>
    <input placeholder={'Prazo'}
    value={this.state.dueDate}
    onChange={this.handleDueDate}
    type='date'/>
    <button onClick={this.fazerCadastro}>Cadastrar</button>
    </Inputs>
     
    )}
};
