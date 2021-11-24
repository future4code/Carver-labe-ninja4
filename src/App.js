import React, { Component } from 'react'
import Cadastro from './components/TelaCadastro'
import styled from 'styled-components'

const ContainerCadastro= styled.div`
display:flex;
border: 1px solid black;
heigth: 100px;
width:600px;
margin: auto;
paddind:20px;
`

export default class App extends Component{
	
	render(){

		return( <ContainerCadastro>
			<Cadastro/>
		</ContainerCadastro>
	
		)};
	
};