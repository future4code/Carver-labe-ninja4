import React, {Component} from 'react'
import { StyledItens } from './StyledIten'


export default class Itens extends Component{

   render(){
       return <StyledItens>
           <p>{this.props.title}</p>
           <p>{this.props.price}</p>
           <button onClick={this.props.remove}>Remover do Carrinho</button>
           </StyledItens>
   };

};