import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const ContainerFooter = styled.div`
background-color: #DBDB00
`
export default class Footer extends Component {
    render() {
        return (
            <ContainerFooter>
                <h2>Redes Sociais</h2>
                
            </ContainerFooter>
        )
    }
}