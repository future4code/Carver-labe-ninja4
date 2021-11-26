import React, { Component } from 'react';
import styled from 'styled-components';
import logo1 from './img/logo1.png'


const ContainerHeader = styled.div`
background-color: #DBDB00;
display: flex;
align-items: center;
justify-content: space-between;
`
const ImgHeader = styled.img`
width: 200px;
padding: 20px;
`
const ButtonHeader = styled.button`
margin: 5px;
border: none;
color: white ;
background-color: #7867bf;
border-radius: 10px 20px;
width:150px;
height:30px;

:hover {
    background-color: #836FFF;
}
`
export default class Header extends Component {
    render() {
        return (
            <ContainerHeader>
                <ImgHeader src={logo1} />
                <div>
                    <ButtonHeader onClick={() =>this.props.mudarPagina("home")}>Página Inicial</ButtonHeader>
                    <ButtonHeader onClick={() =>this.props.mudarPagina("carrinho")}>Carrinho</ButtonHeader>
                </div>
                

            </ContainerHeader>
        )

    }
}
