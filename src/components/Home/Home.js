import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import './Home.css';




export default class Home extends React.Component {
render() {
		return (

			<div className="ContainerHome">
				<div className="CardHome">
					<p className="frase">Seja um filiado.</p>
					<button className="button" onClick={() =>this.props.mudarPagina("cadastro")}>Cadastre seu serviço aqui.</button>
				</div>
				<div className="CardHome">
					<p className="frase">O que você precisa?</p>
					<button  className="button" onClick={() =>this.props.mudarPagina("busca")}>Busque por um serviço.</button>
				</div>
			</div>

		)

	}

}