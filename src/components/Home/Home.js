import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

const ContainerHome = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

`
const CardHome = styled.div`
border-style: groove;
padding: 50px;

`

export default class Home extends React.Component {
render() {
		return (

			<ContainerHome>
				<CardHome>
					<p>Seja um filiado.</p>
					<button onClick={this.props.mudarParaCadastro}>Cadastre seu serviço aqui.</button>
				</CardHome>
				<CardHome>
					<p>O que você precisa?</p>
					<button onClick={this.props.mudarParaBusca}>Busque por um serviço.</button>
				</CardHome>
			</ContainerHome>

		)

	}

}