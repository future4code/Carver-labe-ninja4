import React from 'react'

export default class TelaDeDetalhes extends React.Component{

    render () {
        return (
            <div>
                <div>
                    <button onClick={this.props.irParaHome}>Home</button>
                    <button onClick={this.props.irParaCadastro}>Cadastro</button>
                    <button onClick={this.props.irParaBusca}>Busca</button>
                    <button onClick={this.props.irParaCarrinho}>Carrinho</button>
                    <button onClick={this.props.irParaDetalhes}>Detalhes</button>
                </div>
                detalhes
            </div>
        )

    }

}