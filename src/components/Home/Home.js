import React from 'react';



export default class Home extends React.Component {
    

    render() {
        return (

    <div>
					<div>
						<p>Seja um filiado.</p>
						<button onClick={this.props.mudarParaCadastro}>Cadastre seu serviço aqui.</button>
					</div>
					<div>
						<p>Busque um serviço</p>
						<button onClick={this.props.mudarParaBusca}>Busque por um serviço.</button>
					</div>
				</div>

        )

    }

}