import React, {Component} from 'react'
import Itens from './Itens/Intens'
import { EstiloCarrinho } from './StyledCar'


export default class Carrinho extends Component{

    render(){
        const itensDoCarrinho= this.props.carrinho &&
        this.props.carrinho.map(item=>{
            return (<Itens
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            onClick={()=>this.props.removerItemCarrinho(item.id)}
            />
            )
        });

        return (<EstiloCarrinho>
            <h2>Carrinho</h2>
            <br/>
            <div>
                {itensDoCarrinho}
            </div>
            <p>Valor Total: R${this.props.valorTotal},00</p>
            <button>Finalizar Compra</button>
            </EstiloCarrinho>    
            )
        };

};