import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls';
import { Filtro } from '../Filtro/Filtro'
import styled from "styled-components";
import moment from "moment";

const AreaPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const AreaGrid = styled.div`
    display: flex;
`

const CardProduto = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px;
    padding: 5px;
    justify-content: center;
    align-items: center;
`

export default class TelaDeBusca extends React.Component {
   

        

 
    render() {


        const listaDeOfertas = this.state.listaDeServicos.map((oferta) => {
            return <p key={oferta.id}>
                    <p>{oferta.title}</p>
                    <p>{oferta.description}</p>
                    <p>Valor: {oferta.price}</p>
                    <select>
                        <option value="">Formas de Pagamento</option>
                        {oferta.paymentMethods.map((opcao) => {
                            let i = 0
                            return (
                                <option key={opcao.paymentMethods}>{opcao} </option>
                            )
                        })}
                    </select>
                    <p>Prazo: {moment(oferta.dueDate).format('DD/MM/YYYY')}</p>
                    <button>Ver Detalhes</button>
                    <button>Adicionar ao carrinho</button>
                </p>
        })
       
        return (
            <AreaPrincipal>
                <AreaGrid>
                    <Filtro
                    valueMin={this.state.valueMin}
                    valueMax={this.state.valueMax}
                    search={this.state.search}
                    updateSearch={this.updateSearch}
                    updateValueMin={this.updateValueMin}
                    updateValueMax={this.updateValueMax}
                    />
                    <CardProduto>
                        {listaDeOfertas}                  
                    </CardProduto>
                </AreaGrid>
            </AreaPrincipal>         
        )}
}


