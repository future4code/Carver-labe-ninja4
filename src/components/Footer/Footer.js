import React, { Component } from 'react';
import styled from 'styled-components';
import Instagram from './img/instagram.png';
import Facebook from './img/facebook.png';
import Telefone from './img/telefone.png';
import Email from './img/email.png';

const ContainerFooter = styled.div`
background-color: #DBDB00;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
height: 100px;
`
const ImgRedesSociais = styled.img`
width: 50px;
margin-left: 10px;
margin-top: 5px;
margin-bottom: 10px;;
`
const ImgContato = styled.img`
width: 70px;
margin-left: 10px;
`
const ContatosFooter = styled.div`
display: flex;
align-items: center;
`
export default class Footer extends Component {
    render() {
        return (
            <ContainerFooter>
                
                <div>
                    <h2>Redes Sociais</h2>
                    <ContatosFooter>
                    <ImgRedesSociais src={Instagram} />
                    <ImgRedesSociais src={Facebook} />
                    </ContatosFooter>
                    
                </div>
                <div>
                    <h2>Contatos</h2>
                    <ContatosFooter>
                    <ImgContato src={Telefone} />
                    <p>+55 (99) 99706070</p>
                     <ImgContato src={Email} />
                    <p>servicos@labeninjas.com</p>
                    </ContatosFooter>
                    
                </div>

            </ContainerFooter>
        )
    }
}