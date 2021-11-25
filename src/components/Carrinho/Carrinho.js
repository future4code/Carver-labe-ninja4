 import React, {Component} from 'react'
import Itens from './Itens/Intens'
 import { EstiloCarrinho } from './StyledCar'


export default class Carrinho extends Component{

    render(){
        return <EstiloCarrinho>
            <h2>Carrinho</h2>
            <div>
                <Itens
                title={'Produto'}
                price={'R$:10,00'}
                remove={()=>console.log('removeu')}
                />
            </div>
            <p>Valor Total: R$00,00</p>
            <button>Finalizar Compra</button>
            </EstiloCarrinho>
    };

};